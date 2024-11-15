// Add libraries and initiate express
let express = require('express');
let app = express();

// Express explode public folder as public and use Express built-in body parser
app.use('/public', express.static('public'));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Index/Home page
app.get('/', (req, res) => {
    res.render('pages/tests');
})

app.listen(3000, () => {
    console.log("The server started successfully... YES!")
})