'use strict';

exports.syncProducer = (req, res) => {
  res.set('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ success: true, message: "profile sent to pubsub topic" }));
  };
