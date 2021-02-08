const http = require('http');
const { handleReqRes } = require('./helpers/handleResReq');
const environments = require('./helpers/environments');
const data = require('./lib/data');

const app = {};

data.create('test', 'newFile', { name: 'abm', id: '155998'}, (err) => {
    console.log(err);
});

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