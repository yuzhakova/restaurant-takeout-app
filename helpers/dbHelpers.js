/* NY notes:
- folder routes, file users.js: need to change db for getUsers?
- serjer.js: need to require helpers file using const = dbHelpers = require (./helpers/database.js')(db)
and also add app.use("/api/users", usersRoutes(database))
*/

/*

- getUsersByEmail
- getPhoneNumberByOrderID
- getOwnerPhoneNumber
- fetchOrderByStatus
- fetchOrderDetailsByStatus
- confirmOrder
- updateOrderReady
- addMenuItem
- placeOrder
- getCompleteOrder

*/
module.exports = (db) => {
  const registerUser = (values) => {
    const query = {
      text: `INSERT INTO users (name, email, phone, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values
    }
    return db.query(query).then(result => result.rows[0]);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };
    return db.query(query).then((result) => result.rows[0]);
  };

  const getPhoneNumberByOrderID = (id) => {
    const query = {
      text: `SELECT phone FROM orders JOIN users ON users.id = orders.user_id where orders.id = $1`,
      values: [id],
    };
    return db.query(query).then((result) => JSON.stringify(result.rows[0]));
  };

  const getOwnerPhoneNumber = () => {
    const query = {
      text: `select phone from users where role='owner';`,
    };
    return db.query(query).then((result) => result.rows[0].phone);
  };

  const fetchOrdersByStatus = (status) => {
    const query = {
      text: `SELECT id as order_id, user_id, placed_at, customer_notes
            FROM orders
            WHERE order_status = '${status}';`,
    };
    return db.query(query).then((result) => JSON.stringify(result.rows));
  };

  const fetchOrderDetailsByStatus = (status) => {
    const query = {
      text: `SELECT orders.id as order_id, menu_items.name, ordered_items.qty
      FROM ordered_items
      JOIN menu_items ON menu_items.id = ordered_items.menu_item_id
      JOIN orders ON orders.id = ordered_items.order_id
      WHERE orders.order_status = '${status}';`,
    };
    return db.query(query).then((result) => JSON.stringify(result.rows));
  };

  const confirmOrder = (orderId, waitTime) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + parseInt(waitTime));
    // TODO: fix timestamp to be now + waittime
    const query = {
      text: `
      UPDATE orders
      SET order_status = 'confirmed', wait_time = $1, ready_at = $2
      WHERE id = $3
      RETURNING *;
      `,
      values: [waitTime, date.toLocaleString("en-US", {timeZone: "Canada/Eastern"}) , orderId],
    };
    return db.query(query).then((result) => JSON.stringify(result.rows));
  };

  const updateOrderReady = (orderId) => {
    const query = {
      text: `
      UPDATE orders
      SET order_status = 'ready'
      WHERE id = $1
      RETURNING *;
      `,
      values: [orderId],
    };
    return db.query(query).then((result) => JSON.stringify(result.rows));
  };

  const getMenuItems = () => {
    const query = {
      text: `SELECT * FROM menu_items;`,
    };
    return db.query(query).then((result) => result.rows);
  };

  const addMenuItem = (order_id, menu_item_id, qty) => {
    const query = {
      text:
        "INSERT INTO ordered_items(order_id, menu_item_id, qty) VALUES ($1, $2, $3) RETURNING *",
      values: [order_id, menu_item_id, qty],
    };
    return db.query(query).then((result) => result.rows);
  };

  // const getOrders = () => {
  //   const query = {
  //     text: `SELECT ordered_items.*, menu_items.name
  //     FROM ordered_items
  //     JOIN menu_items ON menu_items.id = menu_item_id;`,
  //   }
  //   return db.query(query).then(result => result.rows)
  // };

  const placeOrder = (
    user_id,
    placed_at,
    customer_notes,
    wait_time,
    order_status,
    ready_at
  ) => {
    const query = {
      text: `INSERT INTO orders(user_id, placed_at, customer_notes, wait_time, order_status, ready_at)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      values: [
        user_id,
        placed_at,
        customer_notes,
        wait_time,
        order_status,
        ready_at,
      ],
    };
    return db.query(query).then((result) => result.rows[0]);
  };

  const getCompletedOrder = (id) => {
    const query = {
      text: `SELECT users.name as name, users.phone as phone_number, orders.* FROM users
      JOIN orders ON users.id = user_id
      WHERE orders.id = ${id};`,
    };
    return db.query(query).then((result) => result.rows[0]);
  };

  return {
    addMenuItem,
    getMenuItems,
    getCompletedOrder,
    placeOrder,
    registerUser,
    getUserByEmail,
    fetchOrdersByStatus,
    fetchOrderDetailsByStatus,
    confirmOrder,
    updateOrderReady,
    getPhoneNumberByOrderID,
    getOwnerPhoneNumber,
  };
};


