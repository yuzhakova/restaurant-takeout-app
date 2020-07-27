// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure //

const twilioSMSAPI = () => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  return function (options) {
    client.messages
      .create({
        body: options.text,
        from: "+19388008322",
        to: options.phoneNumber,
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
  };
};
const notifySMS = twilioSMSAPI();

const notifyOwner = (id = 1234, phoneNumber = "+16048805245") => {
  const options = {
    text: `New Order #${id} is placed. Login to your website for confirmation.`,
    phoneNumber: phoneNumber,
  };
  // notifySMS(options);
};

const notifyCustomerOrderConfirmed = (
  id = 7,
  waitTime = 15,
  phoneNumber = "+16048805245"
) => {
  const options = {
    text: `Your order #${id} is confirmed and will be ready for a pickup in ${waitTime} minutes. See you soon!`,
    phoneNumber: phoneNumber,
  };
  // notifySMS(options);
};

const notifyCustomerOrderReady = (id = 1234, phoneNumber = "+16048805245") => {
  const options = {
    text: `Your order #${id} is ready for a pickup.`,
    phoneNumber,
  };
  // notifySMS(options);
};

module.exports = {
  notifyOwner,
  notifyCustomerOrderConfirmed,
  notifyCustomerOrderReady,
};
