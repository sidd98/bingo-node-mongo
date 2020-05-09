const tambola = require('tambola-generator',);
const { gameModels, } = require('../../modules/game',);
const { userModels, } = require('../../modules/user',);
const { ticketModels, } = require('../../modules/ticket',);


exports.generateTicketAndSave = async (gameId,) => {
    // generate ticket and save to ticket model
    const ticket = tambola.getTickets(1,);
    const ticketDetail = await ticketModels.saveTicket(ticket[0], gameId,);
    return ticketDetail;
};
exports.post = async (req, res,) => {
    try {
        const userName = req.params.user_name;
        const gameId = req.params.game_id;

        // check if game is created or not
        const gameData = await gameModels.getStatus(gameId,);

        if (gameData === undefined) {
            return res.status(404,).send({
                Message: 'Game not found with provided game Id.',
            },);
        }

        // check if user is present or not
        const userDetail = await userModels.checkUser(userName,);

        if (!userDetail) {
        // create a new  user and register after ticket generation
            const ticketDetail = await exports.generateTicketAndSave(gameId,);
            await userModels.createUser(gameId, userName, ticketDetail._id,);

            // update game model
            await gameModels.updateUsersAndTicketsCount(gameId,);

            return res.status(201,).send({
                Message: 'Successfully generate ticket for newUser',
            },);
        }
        // check if user register for game
        const user = await userModels.isUserRegistered(userDetail._id, gameId,);

        if (!user) {
            // create ticket and register user
            const ticketDetail = await exports.generateTicketAndSave(gameId,);
            // register user for game
            await userModels.registerUser(
                userDetail._id, gameId, ticketDetail._id,
            );

            await gameModels.updateUsersAndTicketsCount(gameId,);
        } else {
            const ticketDetail = await exports.generateTicketAndSave(gameId,);
            await userModels.addNewTicketId(user._id, ticketDetail._id,);

            // update ticket count
            await gameModels.updateTicketsCount(gameId,);
        }
        return res.status(201,).send({
            Message: 'Successfully generated ticket for user',
        },);
    } catch (err) {
        res.status(500,).send(err,);
    }
};
