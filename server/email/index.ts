import nodemailer from "nodemailer";

const mailer = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false, // true for 465, false for other ports
});

export default mailer;
