const authModel = require("../models/authenticationModel");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({
      status: "error",
      message: "User credentials are missing",
    });
  } else {
    try {
      const userData = await authModel.findOne({ email });
      if (userData) {
        res.status(409).json({
          status: "error",
          messsage: "the user already exists",
        });
      } else {
        const bcrypt = require("bcrypt");
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new authModel({
          name,
          email,
          password: hashedPassword,
        });

        const user = await newUser.save();
        return res.status(200).json({ status: "userCreated" });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      return res.status(500).json({
        status: "error",
        message: "Internal server error during signup",
      });
    }
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      status: "error",
      message: "User credentials are missing",
    });
  } else {
    try {
      const userData = await authModel.findOne({ email });
      if (userData) {
        const bcrypt = require("bcrypt");
        bcrypt.compare(password, userData.password, function (err, result) {
          if (err) {
            res.status(404).json({
              status: "error",
              message: "Internal server error during password comparison",
            });
          } else {
            if (result) {
              res.status(200).json({ status: "userLoggedin" });
            } else {
              res
                .status(401)
                .json({ status: "error", message: "Password incorrect" });
            }
          }
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "the user is not registered",
        });
      }
    } catch (error) {
      console.error("Error during signin:", error);
      return res.status(500).json({
        status: "error",
        message: "Internal server error during signin",
      });
    }
  }
};
