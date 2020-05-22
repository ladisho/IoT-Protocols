Name: Oladipupo Shotade
Student Number: 20084356
Student E-mail: 20084356@mail.wit.ie

IOT PROJECT
Title: Emergency button

Equipments needed 
1. Raspberry PI
2. Server
3. Button
4. Blynk app: All components such as the library, app and server will be used. 

Summary
when the emergency button is pressed the blynk app brings it up as an alert and the tweet notiication of the alert is also seen as well.The location(the location is gotten through the gps sensor one of the hardware device called sensehat ), screenshots of the location, temperature and humidity of the water are all seen on the main page of the app consisting of widgets for the above mentioned.Emergency services will be notified through an sms that says 'red alert a swimmer is in danger or in need of help or rescue' and link to my blink app that shows them the location of the swimmer on maps and screenshots of the location of the swimmer taken through a mini camera in the button and also the temperature and humidity of the water are also shown.


Development steps for commencement week
1. Installation of blynk app on mobile device. 
2. Creation of blynk account using the app.
3. Saving the necessary log-in information in notes.
4. Creation of project(by dragging and dropping the necessary widgets such as temperature, humidity, maps, screenshots).
5. Choosing the hardwares(Raspberry PI and Sense hat).
6. Attaching both hardwares.
7. Installation of the Node-based blynk library on the raspberry pi(communications with the server will be enabled and process all incoming and outcoming commands).
8. Installation of the sense-hat dependencies. This part brought a huge halt to the project continution because time was spent figuring out why it wasn't working, different codes and modules were installed and tried in an effort to get it to work but it still didn't work so the following two steps was proposed by my lecturer and substituted for the failure to install the sense-hat dependencies. 
9. Creating a Javascript module (sosMessager.js) that can be used to create the vital messages for the emergency button.
10. Creating an emergency event on an IoT platform (Wia) to notify somebody  with mobile app (Blynk).

Updated summary
Once the emergency button is pressed an sos event is created in wia and simultaneously the emergency led is turned on in the blynk app to notify the emergency services that a swimmer is in trouble and the location is seen in wia.


Codes
Didn't work
Installing the sense-hat dependencies
sudo npm install node-sense-hat --save

Updated code of index.js
var Blynk = require("blynk-library");

var sense = require("node-sense-hat");

var AUTH = 'YOUR-AUTH-CODE';

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);

var white = [255, 255, 255];
sense.Leds.clear();

// v1 write call back
v1.on('write', function(param) {
  console.log('V1:', param[0]);
  if (param[0]==1){
        sense.Leds.clear(white)
    }else{
        sense.Leds.clear();
    }
});

Did work and still active
Code to check if Node is already on the pi:
sudo apt-get purge node nodejs node.js -y

Code to remove if it is already on the pi:
sudo apt-get autoremove

Code to update package repository and install node: 
curl -sL "https://deb.nodesource.com/setup_6.x" | sudo -E bash -
sudo apt-get install build-essential nodejs -y
sudo apt-get install npm

Code to make a new directory for the project:
mkdir assessment
cd assessment

Code initialise a new Node project:
npm init

Code to install the Blynk dependencies:
sudo npm install blynk-library --save
sudo npm install onoff ---save

Code to install the wia dependencies:
npm install --save wia

Previous index.js code without the sensehat
var Blynk = require("blynk-library");

var AUTH = 'YOUR-AUTH-TOKEN';

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);

v1.on('write', function(param) {
  console.log('V1:', param[0]);
});

Updated index.js code with the blynk, wia and sosMessager dependencies:
sosMessager = require("./sosMessager")
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Press enter to simulate button press ", function(text) {
 sosMessager("YOUR-BLYNK-AUTH-KEY","YOUR-WIA-DEVICE-SECRET-KEY")
 console.log("SOS Message Sent!");
  rl.close();
});


Screenshots of the project working
For blynk
/home/oladipupo/Documents/Images/Screenshot_20200519-123916_Blynk.jpg

/home/oladipupo/Documents/Images/Screenshot_20200519-123924_Blynk.jpg

/home/oladipupo/Documents/Images/Screenshot_20200519-123929_Blynk.jpg

/home/oladipupo/Documents/Images/Screenshot_20200519-123932_Blynk.jpg

/home/oladipupo/Documents/Images/Screenshot_20200519-123954_Blynk.jpg

/home/oladipupo/Documents/Images/Screenshot_20200519-124136_Blynk.jpg

For terminal and wia
/home/oladipupo/Documents/Images/2020-05-08-171504_1920x1080_scrot.png

/home/oladipupo/Documents/Images/2020-05-19-124029_1280x768_scrot.png

/home/oladipupo/Documents/Images/2020-05-19-124059_1280x768_scrot.png

/home/oladipupo/Documents/Images/2020-05-19-124102_1280x768_scrot.png

/home/oladipupo/Documents/Images/2020-05-19-124126_1280x768_scrot.png








