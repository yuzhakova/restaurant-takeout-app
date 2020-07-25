# Food Pick-up Ordering App

## Project Description
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready. When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

## Project Stack
- HTML, SASS, jQuery and AJAX on the front end
- Node, Express, EJS, PSQL on the server-side

## Our App Allows
  ### Users to:
    - see the menu items online
    - make selection by adding dishes to their cart
    - review their order details and total
    - modify their order before submitting
    - place orders and see online confirmation
    - receive a notification when their order is ready
  ### Restaurant Owner to:
    - receive a notification when new orders are placed
    - provide pickup time

### ERD
!["entity-relationship-database"](https://github.com/yuzhakova/restaurant-takeout-app/blob/master/docs/entity_relationship_diagram.png)

### User stories can be found here
!["user-stories"](/docs)

## Final Product
`ADD TEXT HERE
!["ADD-TEXT"](ADDLINK)`

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
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

# Authors
- Gurcharan Dhaliwal
- Natalia Yuzhakova
