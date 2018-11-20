'use strict';

const PubSub = require('@google-cloud/pubsub');
const pubsub = new PubSub();
const topic = pubsub.topic('syncCustomer');
const publisher = topic.publisher();

exports.syncProducer = (req, res) => {
  res.set('Content-Type', 'application/json');
  let customer = req.query.customer || req.body.customer;
  publisher.publish(Buffer.from(JSON.stringify(customer)), (err) => {
    if (err) {
      res.status(500).send(JSON.stringify({ success: false, error: err.message }));
      return;
    }
    res.status(200).send(JSON.stringify({ success: true, message: "profile sent to pubsub topic" }));
  });
};
