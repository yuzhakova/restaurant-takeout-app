
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  const menuItems = {};

  router.post("/", (req, res) => {      // JSON-only route for AJAX POST

    // no pain, no gain!!!!!

    // what user is it?
      // CHEAT: who cares who it is?
    // what did they just add to cart? (I bet it's cheesecake)
      // not-cheat: get just item ID from request
      // CHEAT: get EVERYTHING from the request, including name and price
    // how many did they just add (if it's 69, maybe you didn't finish fixing the front-end)

    // SQL: does this user already have an order?
    //    SQL: if not, make one!
    // SQL: does this order already have any cheesecake (or whatever item they just added)?             <-- not ideal to skip this, but I guess you can cheat.
    //    SQL: if not, add a NEW order_items, with the item_id and the qty
    //    SQL: if they DO already have cheesecake in some order_item, instead we will MODIFY that item       <--- delay doing this.  if you can't get it done, just cheat on your demo.

    // if all that worked okay, res.end();
    // but ideally, if any of that failed, (1) console log useful things!   (2) res.status(500).end() or something like that (maybe res.status(500).json(err) ?)

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
    let items =  { menuItems };
    console.log('menuItems', menuItems)
    res.render("checkout", items);
  });

  return router;
};
