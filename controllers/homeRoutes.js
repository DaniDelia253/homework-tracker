const router = require('express').Router();
const { User, Homework, Task } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
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
                attributes: ["id", "title", "homework_text", "due_date", "user_id"],
                include: [
                    {
                        model: Task,
                        attributes: ["id", "task_text", "user_id", "homework_id"],
                        order: [['created_at', 'DESC']]
                    }
                ]
            },
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
