const handler = {};

handler.sampleHandler = (requestProperties, callBackFun) => {
    
    callBackFun(200, {
        success : true,
        message : 'this is sample message',
    });
    console.log("sample!");
}

module.exports = handler;