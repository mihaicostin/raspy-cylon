"use strict";

var Cylon = require("cylon");

Cylon.robot({
    connections: {
        raspi: {adaptor: "raspi", port: "/dev/ttyACM0"}
    },

    devices: {
        led: {driver: "led", pin: 11},
        button: { driver: 'button', pin: 12 }
    },

    work: function(my) {

        var blinkLed = true;


        every((1).second(), function() {
            if (blinkLed) {
                if (my.led.isOn()) {
                    my.led.turnOff();
                }
                else {
                    my.led.turnOn();
                }
            }
        });

        my.button.on('push', function() {
            console.log("Button pushed! Will toggle blinking.");
            blinkLed = !blinkLed;
        });


    }

}).start();
