
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  const menuItems = {};

  router.post("/", (req, res) => {      // JSON-only route for AJAX POST



    let selectedMenuItem = req.body;
    console.log('item added', selectedMenuItem)
    const item_id = selectedMenuItem.item_id;
    menuItems[item_id] = {};
    menuItems[item_id].name = selectedMenuItem.name;
    menuItems[item_id].price = selectedMenuItem.price;
    menuItems[item_id].qty = selectedMenuItem.qty;
    menuItems[item_id].image = selectedMenuItem.image;

    res.end();
  })

  router.get("/", (req, res) => {      // non-AJAX route; returns full page of HTML

    // who's the user?  do they have an order going currently?
    // if no, just fill out some zeros or something, something nice and boring
    // if they do, get all the order_items and all the names and prices and quantities and shit
    // put it in template_vars or whatever, res.render('checking', template_vars) or whatever.
    //let items =  { menuItems };

    res.render("checkout");
  });

  router.get("/1", (req, res) => {        // JSON-only route for AJAX GET
      res.json({ menuItems })
  })

  return router;
};
