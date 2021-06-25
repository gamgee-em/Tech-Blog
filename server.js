const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express({ defaultLayout: 'main'});
const path = require('path');


app.engine('handlebars', exphbs({ 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3141;
//const router = require('./routes/routing');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize })
};

app.use(session(sess));
app.use(routes);
//app.use('/', router);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server now listening on PORT:`, PORT));
});