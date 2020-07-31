# Food Pick-up Ordering App

## Project Description
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

## Project Stack
- HTML, SASS, jQuery and AJAX on the front end
- Node, Express, EJS, PSQL on the server-side

## Our App Allows
  ### Customers to:
    - see the menu items online
    - make selection by adding dishes to their cart
    - review their order details and total
    - modify their order before submitting
    - place orders and see online confirmation
    - receive a notification when their order is ready
  ### Restaurant to:
    - receive a notification when new orders are placed
    - provide pickup time

## User Stories
!["user-stories"](https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/doc_user_stories.png)

Customers and Restaurant requirements converted to app features

## Entity Relationship Diagram
!["entity-relationship-database"](https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/doc_ERD.png)

PSQL database tables design

## Final Product

  ### Main Page

!["main-page"](https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/project-main-page.png)

  ### Order Review and Checkout

!["order-review-checkout"](https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/project-order-review-checkout.png)

  ### Order Confirmation

!["order-confirmation"](https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/project-order-confirmation.png)


## Dependencies
- Node 10.x or above
- NPM 5.x or above
- PG 6.x and pg-native
- Express
- Body-parser
- Chalk
- Dotenv
- EJS
- Morgan
- Node-sass-middleware
- Twilio (trial version of telecomm API service is used to implement SMS communication from the website to the client and restaurant).

## Dev Dependencies
- Nodemon (or Live-server)

## Getting Started
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information  (username: `labber`; password: `labber`; database: `midterm`)
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset` (check the db folder to see what gets created and seeded in the SDB)
7. Run the server: `npm run local` (note: nodemon is used, so you should not have to restart your server)
8. Visit `http://localhost:8080/`

## Developers Team
[Gurcharan Dhaliwal](https://github.com/GSDhaliwal) and [Natalia Yuzhakova](https://github.com/yuzhakova)
