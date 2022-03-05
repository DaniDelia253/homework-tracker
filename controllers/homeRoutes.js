const router = require('express').Router();
const { User, Homework } = require('../models');

router.get('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    User.findAll({
        where: {
            id: req.session.user_id
        },
        attributes: [
            "id",
            "username",
            "email",
            "password"
        ],
        include: [
            {
                model: Homework,
                attributes: ["id", "title", "homework_text", "due_date", "user_id"]
            }
        ]
    })
        .then((dbUserData) => {
            const user = dbUserData.map(item => item.get({ plain: true }));
            const thisUser = user[0]
            console.log(thisUser)
            res.render('homepage', {
                thisUser,
                loggedIn: req.session.loggedIn
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
})

module.exports = router;
