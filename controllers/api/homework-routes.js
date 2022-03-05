const router = require('express').Router();
const { User, Homework } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Homework.findAll({
        include: {
            model: User,
            attributes: ['username']
        }
    })
        .then(dbHomeworkData => res.json(dbHomeworkData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', withAuth, (req, res) => {
    Homework.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: ['username']
        }
    })
        .then(dbHomeworkData => {
            if (!dbHomeworkData) {
                res.status(404).json({ message: 'No homework found with this id' });
                return;
            }
            res.json(dbHomeworkData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Homework.create({
            title: req.body.title,
            homework_text: req.body.homework_text,
            due_date: req.body.due_date,
            user_id: req.body.user_id
    })
        .then(dbHomeworkData => res.json(dbHomeworkData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Homework.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbHomeworkData => {
            if (!dbHomeworkData) {
                res.status(404).json({ message: 'No homework found with this id.' });
                return;
            }
            res.json(dbHomeworkData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Homework.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbHomeworkData => {
            if (!dbHomeworkData) {
                res.status(404).json({ message: 'No homework found with this id.' });
                return;
            }
            res.json(dbHomeworkData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;