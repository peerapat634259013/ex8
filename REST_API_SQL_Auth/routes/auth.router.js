const {verifySignUp} = require("../middleware")
const controller = require("../controllers/auth.controller")

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Controll-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        );
        next();
    });
    //signup
    //http://localhost/apis/auth/sigup
    app.post(
    "/apis/auth/signup", //Path
    [verifySignUp.checkDuplicateUserOrEmail, verifySignUp.checkRolesExisted], //middleware
     controller.signup //function
     );

    //signin
    //http://localhost/apis/auth/sigin
     app.post(
    "/apis/auth/signin", //Path 
     controller.signin //function
     );
};
