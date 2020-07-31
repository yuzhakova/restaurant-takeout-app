// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');


//twilio set up - inbound sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;
//twilio set up - outbound sms

const accountSid = 'ACdaab8cf6fda53affb3d835ce9bf89163';
const authToken = 'new';
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const menuRoutes = require("./routes/menu");
const checkoutRoutes = require("./routes/checkout");
const confirmationRoutes = require("./routes/confirmation");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/menu", menuRoutes(db));
app.use("/checkout", checkoutRoutes(db));
app.use("/confirmation", confirmationRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


//twilio setup
app.post("/confirmation", (req, res) => {
  console.log(req.body);
  client.messages
    .create({
      body: 'Your FEED-ly order will be ready in 20 minutes.',
      from: '19388008322',
      to: '16048805245'
    }).then((message) => {
      console.log(message.sid)
    })
  .then(() => res.redirect('confirmation'), { orderdata: req.body });
});

app.post("/placeyourorder", (req, res) => {
  res.redirect('confirmation');
});



//

// //twilio set up - this is for inbound sms
// POST request comes from twilio whenever a response is received via SMS (via ngrok)
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message(`add message`);
  // 1: get access to the database
  // 2: find the correct order from the message based on the time the message was sent
  // 3: update the order_id on the table row for the given order
  // 4: get the owner of the order via the database (based on step 2)
  // 5: use client.messages.create to send a confirmation message to the owner of the order
  db.query(`INSERT INTO orders`, mesesage.sid); // update the message_id to message.sid

  res.writeHead(200, {'Content-Type': 'text/xml'});
  // const reply = function () {
  //   client.messages
  //     .create({
  //       body: 'Your FEED-ly order order is ready.',
  //       from: '16048805245',
  //       to: '16048805245'
  //     })
  // }

  // setTimeout(reply, 5000);

  // res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});
  // http.createServer(app).listen(1337, () => {
    // console.log('Exress server is listening on port 1337')
  // });
