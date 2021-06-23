const express = require('express');
const exphbs = require('express-handlebars');

const app = express({ defaultLayout: 'main'});

const path = require('path');

app.engine('handlebars', exphbs({ 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3141;
const router = require('./routes/routing');

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server now listening on PORT:`, PORT);
});

