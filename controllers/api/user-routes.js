const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all Users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password'] 
        }
    })
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => console.log(err));
});

// GET User by ID
router.get('/:id', (req, res) => {
    User.findAll({
        where: {
            id: req.params.id
        },
        attributes: {
            exclude: ['password']
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id.' })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST/CREATE a New User
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData)
      })
    })    
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// Login Route
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(dbUserData => {
      //verify user
      if(!dbUserData) {
        res.status(400).json({ message: 'Username not Found' });
        return;
      }
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect Password' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json({user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

// PUT /api/users/1
router.put('/:id', (req, res) => {
    User.update(req.body, {
        // Runs password through bcrypt
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id.' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json(dbUserData);
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

