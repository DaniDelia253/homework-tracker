const router = require('express').Router();
const { Homework, Task } = require('../../models');

router,get('/', (req, res) => {
    Task.findAll();
})