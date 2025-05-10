const userRoster = require("../data/userInventory");


const register =(request, response, next) =>  {
    // firstName, lastName, username, password <-------request.body
  
    //object destructuring
    const { firstName, lastName, username, password } = request.body;
  
    try {
      //do not need to do key:value because it's the same name
      const newUser = {
        firstName,
        lastName,
        username,
        password,
      };
      userRoster.push(newUser);
  
      newUser.password = undefined;
  
      console.log("userRoster :>>", userRoster);
  
      response.status(201).json({
        success: { message: "User is created" },
        data: { newUser },
        statusCode: 201,
      });
    } catch (error) {
      console.log(error);
  
      response.status(400).json({
        error: { message: "Something wrong" },
      });
    }
  };


  const loginLocal = (request, response, next) => {
    const user = userRoster[userRoster.length - 1];
  
    const userCopy = user;
    let result = true;
  
    //passport
    function mockPassport(err, user) {
      //authenticate user
    }
  // changed err to a string for now
  
    mockPassport("err", user);
  
    response.status(200).json({
      success: { message: "Login was successful" },
      data: { user: userCopy },
      result,
    });
  };

  const login = (request, response, next) => {
    //Steps: get information and confirm
  
    response.status(200).json({
      success: { message: "Login was successful" },
    });
  };


  const logout =  (request, response, next) => {
    //passport is going to logout the user
  
    response.clearCookie("connect.sid");
  
    //passport and other methods
    function sessionDestruction(err) {
      if (err) {
        return next(err);
      }
    }
  
    sessionDestruction();
  
    response.status(200).json({
      success: { message: "Logout successfully" },
    });
  };

  module.exports = {register, login, loginLocal, logout}