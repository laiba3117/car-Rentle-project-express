const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "laibachughtai06@gmail.com",
    pass: "mule wwrr iapd fffo",
  },
});

module.exports = transporter;
