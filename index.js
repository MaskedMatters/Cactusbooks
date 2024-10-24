let express = require('express');
let app = express();

// Express use thingies
app.use('/public', express.static('public'))

// Set view engine to EJS
app.set('view engine', 'ejs');

// Index/Home page
app.get('/', (req, res) => {
    res.render('pages/index', { curPage: "dashboard" });
})

app.get('/tests', (req, res) => {
    res.render('pages/tests', { curPage: "tests" });
})

app.get('/settings', (req, res) => {
    res.render('pages/settings', { curPage: "settings" });
})

app.get('/globals', (req, res) => {
    res.render('pages/globals', { curPage: "globals" });
})

// Listen on port
app.listen(3000, () => {
    console.log("Weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...")
})