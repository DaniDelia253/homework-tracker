const router = require('express').Router();
const { User, Homework } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    User.findAll({
        attributes: [
            "id",
            "username",
            "email",
            "password"
        ],
        include: [
            {
                model: Homework,
                attributes: ["id", "title", "homework_text", "user_id"]
            }
        ]
    })
        .then((dbUserData) => {
            console.log(dbUserData)
            const user = dbUserData.map((user) => user.get({ plain: true }));
            res.render('homepage', {
                user,
                loggedIn: req.session.loggedIn
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
})

module.exports = router;
