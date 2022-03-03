const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path')


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

//setup session
const sess = {
  secret: 'supersecretsessionsecrettext',
  cookie: { maxAge: 180000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.static(path.join(__dirname, '/public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

// Use Routes
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});