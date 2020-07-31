const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  let confirmedItems = {};
  let prices = {};
  let customerInfo = {};
  let totalQuantity = 0;
  let waitTime = 0;



  const accountSid = 'ACdf5a7fd0dd98ae7a672b705a9bcb9591';
  const authToken = '8aae7aa726fe12ad008b759dabd13731';
  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);


  router.post("/", (req, res) => {      // JSON-only route for AJAX POST
    let selectedMenuItem = req.body;
    const items = selectedMenuItem.itemInfo;
    for (let item in items) {
      confirmedItems[item] = {};
      confirmedItems[item].id = items[item].id;
      confirmedItems[item].qty = Number(items[item].qty);
      confirmedItems[item].image = items[item].image;
      totalQuantity += confirmedItems[item].qty;
    }
    let subPrice = ((selectedMenuItem.subTotalPrice) / 100).toFixed(2);
    let totalPrice = (subPrice * 1.12).toFixed(2);
    prices.subTotPrice = subPrice;
    prices.totPrice = totalPrice;
    res.end();
    customerInfo.name = selectedMenuItem.customerName
    customerInfo.phone = selectedMenuItem.customerPhone
    customerInfo.notes = selectedMenuItem.customerNotes
  });

  router.get("/", (req, res) => {
    if (totalQuantity > 3) {
      waitTime = totalQuantity * 6;
    } else {
      waitTime = 15;
    }
    client.messages
    .create({
      body: `Your FEED-ly order will be ready in ${waitTime} minutes.`,
      from: '16042659121',
      to: `16043680803`
    }).then((message) => {
      console.log(message.sid)
    })

    res.render("confirmation", { confirmedItems, prices, customerInfo });
    });
  return router;
};
