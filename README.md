# bingo-node-mongo
Bingo Game back-end server

## Tech Stack
* [Docker][docker], [Node.js][node],[JavaScript][js] — core platform and dev tools
* [Express][express] — common HTTP-server features
* [ESLint][vceslint] - linting


## Directory Layout

```bash                         
├── config
│   └── default.js
├── docker-compose.yml
├── Dockerfile
├── index.js
├── package.json
├── package-lock.json
└── src
    ├── app
    │   ├── app.js
    │   └── views
    │       └── index.ejs
    ├── modules
    │   ├── game
    │   │   ├── index.js
    │   │   └── models
    │   │       ├── gameModel.js
    │   │       └── index.js
    │   ├── ticket
    │   │   ├── index.js
    │   │   └── models
    │   │       ├── index.js
    │   │       └── ticketModel.js
    │   └── user
    │       ├── index.js
    │       └── models
    │           ├── index.js
    │           └── userModel.js
    ├── router
    │   ├── game
    │   │   ├── creategame.js
    │   │   ├── gamestatus.js
    │   │   ├── getticket.js
    │   │   ├── getusednumbers.js
    │   │   ├── index.js
    │   │   └── picknumber.js
    │   ├── index.js
    │   └── ticket
    │       ├── index.js
    │       └── showticket.js
    └── utils
        └── main.js
```

## Prerequisites

* [Docker][docker] Community Edition v17 or higher
* [VS Code][code] editor (preferred), 

## Getting Started

Clone the repo <git_path>

```bash
git clone <git_path>
example-api
cd example-api                  # Change current directory to the newly created one
npm start                       # code running in node server
OR
npm run start-watch             # Code redeploys on server if any file is changed
```

For the full list of automation scripts available in this project, please refer to "scripts"
section in the [`package.json`](./package.json) file.
    ```

## Running Project in Docker

1. Clone the repo from (<Git_repo_path>).
2. `docker-compose up` in the directory for the repo cloned. This will build the docker containers and start the docker-compose stack.
3. To stop the environment run `docker stop <id>`.


```bash
git clone <git-repo-path>
example-api
cd example-api                  # Change current directory to the newly created one
docker-compose up               # Launch Docker containers with the Node.js API app running inside


Once the Docker container service named `api-server` is started, the Docker engine executes `npm install`
command that installs Node.js dependencies,
compiles Node.js app from source files (see [`src`](./src)) and launches it with "live reload"
on port `4000`.

## Task command summary

| Command          | Purpose                                                     |
|------------------|-------------------------------------------------------------|
| start            | Starts the docker-compose stack                             |
| stop             | Stops the docker-compose stack                              |
| show\_log        | Shows the output of the running containers in the terminal  |
| build\_temp\_dev  | Builds the development version of the container             |
| build\_temp\_prod | Builds the production version of the containers             |
| init             | Cleans any existing version of the stack, and then rebuilds |
| clean            | Destroy any existing versions of this docker-compose stack  |









