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
    res.render('pages/index', { curPage: "dashboard" });
})

// Tests page
app.get('/tests', (req, res) => {
    res.render('pages/tests', { curPage: "tests" });
})

// Settings page
app.get('/settings', (req, res) => {
    res.render('pages/settings', { curPage: "settings" });
})

// Globals page
app.get('/globals', (req, res) => {
    res.render('pages/globals', { curPage: "globals" });
})

app.get('/testdetails', (req, res) => {
    let title = decodeURIComponent(req.query.title)
    let json = decodeURIComponent(req.query.jsonText)

    res.render('pages/testdetails', { testTitle: title, testJSON: json, curPage: "tests" })
})

// Validate post request
app.post('/validate', (req, res) => {
    let testTitle = req.body.titleInput
    let testJSONFile = req.body.formFile
    let testJSONText = req.body.formText

    if (testTitle == undefined) {
        res.redirect('/')
    }

    if (testJSONFile != undefined) {
        res.redirect(`/testdetails?title=${encodeURIComponent(testTitle)}&jsonText=${encodeURIComponent(testJSONFile)}`);
    }
    else if (testJSONText != undefined) {
        res.redirect(`/testdetails?title=${encodeURIComponent(testTitle)}&jsonText=${encodeURIComponent(testJSONText)}`);
    }
    else {
        res.redirect('/')
    }
})

// Listen on port
app.listen(3000, () => {
    console.log("Weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...")
})