var awsIot = require('aws-iot-device-sdk');
// Config
var device = awsIot.device({
   keyPath: "private.pem.key",
  certPath: "cert.pem.crt",
    caPath: "root.crt",
      host: "a3mtxgrhrb7olh-ats.iot.us-east-1.amazonaws.com"
});

// Connect
device
  .on('connect', function() {
    console.log('Connected');
// Subscribe to myTopic
    device.subscribe("myTopic");
// Publish to myTopic
    device.publish("myTopic", JSON.stringify({message: 'ON'}));  });
// Receiving a message from any topic that this device is
// subscribed to.
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });
