const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

//setup session
const sess = {
    secret: 'supersecretsessionsecrettext',
    cookie: { maxAge: 180000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));

// Use Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});