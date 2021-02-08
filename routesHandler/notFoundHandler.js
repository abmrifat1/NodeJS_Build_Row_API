const handler = {};

handler.notFoundHandler = (requestProperties, callBackFun) => {
    
    callBackFun(404, {
        success : false,
        message : 'your request is not found!'
    });
    console.log("Failed!");
}

module.exports = handler;