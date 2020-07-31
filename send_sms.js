// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();
const ENV        = process.env.ENV || "development";
// const express    = require("express");
// const app        = express();


//twilio set up
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'New order was placed.',
    // body: 'Your FEED-ly order will be ready in 20 minutes.',
    from: '19388008322',
    to: '16048805245'
   })
  .then(message => console.log(message.sid));
