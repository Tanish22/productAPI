const express = require('express');
const router = express.Router();

const catControllers = require('../controllers/categoryController')

router.route('/')
    .get(catControllers.index)

module.exports = router; 