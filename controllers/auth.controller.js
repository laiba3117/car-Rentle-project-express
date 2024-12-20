const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const path = require("path");
const ejs = require("ejs");
const transporter = require("../config/mail");

const authController = {
 
  SignupUser: async (req, res) => {

    try {
      const { name, email, password, phone } = req.body;

      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      var newUser = new userModel({
        name,
        email,
        password: hashedPassword,
        phone,
      });
      await newUser.save();


      const templatePath = path.join(__dirname, "../view", "welcome.ejs");
      const emailData = { name };

      ejs.renderFile(templatePath, emailData, async (err, html) => {
        if (err) {
          console.error("Error rendering email template:", err);
          return res.status(500).json({ message: "Error rendering email" });
        }

        const mailOptions = {
          from: "laibachughtai06@gmail.com",
          to: email,
          subject: "Welcome to Our Service",
          html: html,
        };

        try {
          await transporter.sendMail(mailOptions);
          res.status(201).json({
            message: "User registered successfully and email sent",
            user: newUser,
          });
         }
          catch (err) {
          console.error("Error sending email:", err.message);
          res.status(500).json({ message: "Error sending email" });
         }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  SigninUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email not found" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid Password" });
      }
   
      const token = jwt.sign(
        { userId: user._id, email: user.email ,role:user.role}, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: process.env.EXPIRES_JWT }
      );

      console.log( "this is " ,token)
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },


  sendMail: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "email not found" });
      } else {
        const otp = Math.floor(Math.random() * 999999) + 1000000;
        console.log(otp);
        otp = user.otp;
        otp = await userModel.user.save();
        res.status(200).json({
          message: "email found and an otp is sent your registerd email",
          otp,
        });
      }
    } catch (error) {}
  },


  updatepassword: async (req, res) => {
    try {
      const { email, otp, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email not found " });
      }
      const checkOTP = await user.otp;
      if (checkOTP == otp) {
        const hashPassword = await bcrypt.hash(password, 10)
        user.password = hashPassword;
        user.save();
        res.status(200).json({ message: "Password Updated successfully" })
      }
    } catch (error) {
      res.status(500).json({ messae: "error while updating password" ,error})
    }
  },


  userProfile: async (req, res) => {
    try {
      const { name, email, phone, postalCode, address, gender } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(402).json({ message: "pease login to your account" });
      }
      return res.status(200).json({ message: "account found", user });
    } catch (error) {
      conse.error(error);
      return res.status(400).json({ message: "error while adding profile user", error });
    }
  },

  socialMedia : async (req, res) => {
    const { provider, uid, name, email } = req.body;

    if (!provider || !uid) {
        return res.status(400).json({ message: 'Provider and UID are required' });
    }

    try {
      
        let user = await user.findOne({ provider, uid });

        if (!user) {
                       user = new user({ provider, uid, name, email });
            await user.save();
        }
      
        const token = jwt.sign(
          { userId: user._id, email: user.email ,role:user.role}, // Payload
          process.env.JWT_SECRET, // Secret key
          { expiresIn: process.env.EXPIRES_JWT }
        );
               return res.status(200).json({ token, message: 'Login successful' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
  }

};

module.exports = authController
