const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../routesHandler/notFoundHandler');



const handler = {}
handler.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, '');
    let method = req.method;
    method = method.toLowerCase();
    const queryString = parseUrl.query;
    const headers = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimPath,
        method,
        queryString,
        headers
    }
    const decoder = new StringDecoder('utf-8');
    let realData = "";

    const chosenHandler = routes[trimPath] ? routes[trimPath] : notFoundHandler;    

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
            payload = typeof(payload) === 'object' ? payload : {};
    
            const payloadString = JSON.stringify(payload);
            console.log('status code:', statusCode, trimPath, realData);
    
    
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        res.end(realData);
    })
}
module.exports = handler;
