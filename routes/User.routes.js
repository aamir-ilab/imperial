var client = require("../controllers/User.Controller");
var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/register", client.register);
    app.post("/login", client.login);
        app.post("/getParent", client.getParent);
    app.post("/getUserByToken", VerifyToken, client.userToken);
    // app.post("/ login", client.login);
    // app.get("/auth/client/google", client.google);
    // app.get("/auth/client/google/callback", client.google_callback);
    // app.post('/client/google', client.google_auth);
    // app.post('/client/facebook', client.facebook_auth);
    app.put("/auth/:id", VerifyToken, client.update);
    app.put("/auth/client/:id", VerifyToken, client.update);
    // app.post("/client/updateClientVendor", client.updateClientVendor);
    app.post("/profile", client.updateProfile);
    app.post("/client/hash", client.updateHash);
    app.delete("/auth/client/:id", client.delete);
    // app.delete("/auth/client/:id", VerifyToken, client.delete);
    // app.get("/auth/client/:id", VerifyToken, client.findById);
    // app.get("/client/getAll", client.getAll);
    app.post("/auth/client/:id", VerifyToken, client.findById);
    app.post("/authnum/client/:id", VerifyToken, client.findByIdNum);
    app.post("/getAll", client.getAll);
    app.post("/getAllSubType", client.getAllSubType);
    app.post("/getAllType", client.getAllType);
    // app.post("/client/delClient", client.delClient);

    // app.post('/client/verify/phone', client.phoneverify);
    // app.post("/client/verify/setPhone", client.setPhone);
    // app.post("/client/verify/setPhoneEmail", client.setPhoneEmail);
    app.post("/client/verify/email", client.emailverify);
    app.post("/client/verify/setEmail", client.setEmail);
    app.post('/setVerify',client.setVerify);
    app.post("/resetpassword", client.resetpassword);
    // app.post("/client/addMulti", client.addMulti);

    app.post('/upload', client.upload)
    app.post('/addFile', client.addFiles)
    app.post('/getFiles', client.getFiles)
    app.post('/getAllFiles', client.getAllFiles)
    app.post('/forgot/:email', client.forgotPassword)
    app.post('/delFile', client.delFile);

    app.post('/removeUser',client.removeUser);
    app.post('/sendmsg',client.sendmsg);
    // app.post("/requests/delete",  client.removeMultiRequest);

};