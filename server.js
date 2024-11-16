// Add libraries and initiate express
let express = require('express');
let app = express();

let testInfo = {}
let code = []

// Express explode public folder as public and use Express built-in body parser
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true })); // This lets the post method work

// Set view engine to EJS
app.set('view engine', 'ejs');

// Index/Home page
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/creation', (req, res) => {
    res.render('pages/create');
});

app.post('/validator', (req, res) => {
    let testInfo = {
        "title": req.body.testTitle,
        "description": req.body.testDescription,
        "json": JSON.stringify(req.body.testJSON)
    }

    if (req.body.activatePledge) {
        testInfo.pledge = req.body.testPledge
    }

    res.redirect(`/store?testInfo=${encodeURIComponent(JSON.stringify(testInfo))}`)
});

app.get('/store', (req, res) => {
    let testInfo = req.query.testInfo
    res.render('pages/store', { testInfo })
})

app.get('/start', (req, res) => {
    for (i = 0; i < 8; i++) {
        code.push(Math.floor(Math.random() * 10));
    }

    res.render('pages/start', { code })
})

app.listen(3000, () => {
    console.log("The server started successfully... YES!")
});