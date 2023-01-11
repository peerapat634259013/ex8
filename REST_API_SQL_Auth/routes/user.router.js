const {aythJwt, authJwt} = require("../middleware")
const controller = require("../controllers/user.controller")
module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Controll-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    });
    //http://localhost/apis/auth/sigup
    app.get("/apis/test/all",controller.allAccess);

    //http://localhost/apis/auth/user
    app.get("/apis/test/user",[authJwt.verifyToken],controller.userBoard);

    //http://localhost/apis/auth/admin
    app.get("/apis/test/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard);

    //http://localhost/apis/auth/mod
    app.get("/apis/test/mod",[authJwt.verifyToken, authJwt.isModerator],controller.moderatorBoard);
};