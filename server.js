// Add libraries and initiate express
let express = require('express');
let app = express();

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
    let rand = Math.floor(Math.random() * 99999999) + 1;
    let digitArray = Array.from(String(rand), Number);
    res.render('pages/start', { digitArray })
})

app.listen(3000, () => {
    console.log("The server started successfully... YES!")
});