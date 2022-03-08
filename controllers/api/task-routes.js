const router = require('express').Router();
const { Homework, Task } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Task.findAll({
        order: [['created_at', 'DESC']]
    })
        .then(dbTaskData => res.json(dbTaskData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', withAuth, (req, res) => {
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbTaskData => {
            if (!dbTaskData) {
                res.status(404).json({ message: 'No task found with this id.' });
                return;
            }
            res.json(dbTaskData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Task.create({
        task_text: req.body.task_text,
        user_id: req.session.user_id,
        homework_id: req.body.homework_id
    })
        .then(dbTaskData => res.json(dbTaskData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Task.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbTaskData => {
            if (!dbTaskData) {
                res.status(404).json({ message: 'No task found with this id.' });
                return;
            }
            res.json(dbTaskData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Task.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTaskData => {
            if (!dbTaskData) {
                res.status(404).json({ message: 'No task found with this id.' });
                return;
            }
            res.json(dbTaskData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;