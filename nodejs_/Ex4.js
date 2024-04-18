const express = require('express');
const path = require('path');
const app = express();
const port = 5011;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/find', (req, res) => {
    res.render('find'); 
});

app.get('/giveaway', (req, res) => {
    res.render('giveaway'); 
});

app.get('/pets', (req, res) => {
    res.render('pets'); 
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
