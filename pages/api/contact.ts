import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
require("dotenv").config();

interface ErrorResponse extends Error {
  address?: string;
}
interface infoResponse extends Error {
  accepted?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const message = {
      from: req.body.email,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: req.body.subject,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
    };

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    transporter.sendMail(message, (err: ErrorResponse, info: infoResponse) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  } catch (err: any) {
    res.status(500).json({
      error: err.message,
    });
    console.log(err.message);
  }
}
