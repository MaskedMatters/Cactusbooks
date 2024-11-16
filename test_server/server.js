// Add libraries and initiate express
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // This lets the post method work

// Define the alphabet
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let testInfo = {};

let users = {};

app.post('/instest', (req, res) => {
    let roomCode = [];
    let startCode = [];

    testInfo = {
        "title": req.body.testTitle,
        "description": req.body.testDescription,
        "json": JSON.stringify(req.body.testJSON)
    };

    if (req.body.activatePledge) {
        testInfo.pledge = req.body.testPledge;
    }

    for (i = 0; i < 8; i++) {
        roomCode.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }

    for (i = 0; i < 8; i++) {
        startCode.push(Math.floor(Math.random() * 10));
    }

    testInfo.roomCode = roomCode;
    testInfo.startCode = startCode;
});

app.delete('/deltest', (req, res) => {
    testInfo = {};
});

app.get('/testinfo', (req, res) => {
    res.send(testInfo)
});

app.listen(5160, () => {
    console.log("The server started successfully... YES!")
});