const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});