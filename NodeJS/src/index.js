const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes')
const db = require('./config/db')

//Connect to DB
db.connect()

//Use static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//XMLHttpRequest, fetch, axios  

console.log(path.join(__dirname, 'img'))

// HTTP logger
// app.use(morgan('combined'));

// View engine setup
app.set('views', path.join(__dirname, 'resources', 'views'));
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//Route init
route(app)

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});