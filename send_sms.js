// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure


//twilio set up - inbound sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = 'ACdaab8cf6fda53affb3d835ce9bf89163';
const authToken = '7bc370df179ce5ec00ad781031f2dabf';

const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'Your FEED-ly order will be ready in 20 minutes.',
     from: '19388008322',
     to: '16048805245'
   })
  .then(message => console.log(message.sid));
