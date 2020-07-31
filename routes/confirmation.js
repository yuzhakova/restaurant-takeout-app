const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  let confirmedItems = {};
  let prices = {};
  let customerInfo = {};

  router.post("/", (req, res) => {      // JSON-only route for AJAX POST
    let selectedMenuItem = req.body;

    const items = selectedMenuItem.itemInfo;
    for (let item in items) {
      confirmedItems[item] = {};
      confirmedItems[item].qty = items[item].qty;
      confirmedItems[item].image = items[item].image;
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

    res.render("confirmation", { confirmedItems, prices, customerInfo });
    });
  return router;
};
