const http = require('http');
const { handleReqRes } = require('./helpers/handleResReq');
const environments = require('./helpers/environments');

const app = {};

app.config = {
    port: 3000
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environments.port, () => {
        console.log('listening to port ', environments.port);
    });
}

app.handleReqRes = handleReqRes;

app.createServer();