module.exports = function (blynkAuthToken, wiaDeviceKey) {
    var Blynk = require("blynk-library");
    var blynk = new Blynk.Blynk(blynkAuthToken);
    var led = new blynk.WidgetLED(2);

    blynk.on('connect', function() { console.log("Emergency LED turned on"); led.turnOn();});
    

    // Create an instance of Wia
    // wiaDeviceKe is your device secret key
    var wia = require('wia')(wiaDeviceKey);

    // Listen for a successful connection to the MQTT API
    wia.stream.on('connect', function () {
        // Publish an event
        wia.events.publish({
            name: 'sos',
            data: 1
        });
    });
    // Connect  the Wia MQTT API and publish Sos Event
    wia.stream.connect();
}
