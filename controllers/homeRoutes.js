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
    }).then((dbUserData) => {
        console.log(dbUserData)
    }).catch(console.log(err))
})
