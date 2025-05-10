const express = require("express");

const router = express.Router();

const {
  register,
  login,
  loginLocal,
  logout,
} = require("../controllers/authControllers");

//  this is middleware  is authenticating this person if they are admin or not
const checkAuthentication = (req, res, next) => {
  //some logic
  if (res.ok) {
    return next();
  } else {
    return res
      .json("Warning: User is not admin")
      .redirect(403, "/unauthenticated");
  }
};

router.get("/unauthenticated", (req, res, next) => {
  //extra steps optionally
  res.redirect("/");
});

router.get("/admin", checkAuthentication, (req, res, next) => {
  loginLocal.call(res.result);

  function auth() {
    res.json("Redirecting to admin page");
  };

  auth();
  
});

//register - POST
router.post("/register", register);

//  login local
router.get("/login/local", loginLocal);

router.get("/login/error", (request, response, next) => {
  response.json("Login error");
});

//login - GET
router.get("/login", login);

//logout - GET
router.get("/logout", logout);

module.exports = router;
