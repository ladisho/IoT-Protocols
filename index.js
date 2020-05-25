var sosMessager = require("./sosMessager");

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Press enter to simulate button press ", function(text) {

 sosMessager("roz9n06BKIc7ToNStwdMHZQMwCnQ7dXz","d_sk_qJpTycGltHXskbhkeKQNYINV");

 console.log("SOS Message Sent!");

  rl.close();
});

