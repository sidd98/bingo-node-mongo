const { ticketModels, } = require('../../modules/ticket',);

exports.get = async (req, res,) => {
    const { ticket_id, } = req.params;
    const ticket = await ticketModels.getTicket(ticket_id,);
    if (ticket) {
        res.render('index', { ticket, },);
    }
    res.render('notfound',);
};
