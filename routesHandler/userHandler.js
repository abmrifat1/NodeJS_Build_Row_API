const handler = {};

handler.userHandler = (requestProperties, callBackFun) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._user[requestProperties.method](requestProperties, callBackFun);
    } else {
        callBackFun(405);
    }
    // callBackFun(200, {
    //     success : true,
    //     message : 'this is user url',
    // });
    console.log("sample!");
}
handler._user = {};
handler._user.post = (requestProperties, callBackFun) => {}
handler._user.get = (requestProperties, callBackFun) => {
    callBackFun(200, {
        success : true,
        message : 'this is get user url',
    });
}
handler._user.put = (requestProperties, callBackFun) => {}
handler._user.delete = (requestProperties, callBackFun) => {}

module.exports = handler;