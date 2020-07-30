
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  const menuItems = {};

  router.post("/", (req, res) => {      // JSON-only route for AJAX POST
  let selectedMenuItem = req.body;
    const item_id = selectedMenuItem.item_id;
    menuItems[item_id] = {};
    menuItems[item_id].name = selectedMenuItem.name;
    menuItems[item_id].price = selectedMenuItem.price;
    menuItems[item_id].qty = selectedMenuItem.qty;
    menuItems[item_id].image = selectedMenuItem.image;

    res.end();
  })

  router.get("/", (req, res) => {      // non-AJAX route; returns full page of HTML


    res.render("checkout");
  });

  router.get("/1", (req, res) => {        // JSON-only route for AJAX GET
      res.json({ menuItems })
  })

  return router;
};
