const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const nodemailer = require('nodemailer');

app.use(express.json());
require('dotenv').config();

app.get('/', (req, res) => res.send('API Running'));

app.post('/send', (req, res) => {
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const {subject,content} = req.body

  let mailDetails = {
    from: 'xyz@gmail.com',
    to: 'zehairawan@gmail.com',
    subject: subject,
    text: content,
  };

  try {
    mailTransporter.sendMail(mailDetails);
    res.send('Email sent!');
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
