const express = require('express');
const {createBlog} = require('../controllers/blogController');

const router = express.Router(0);


router.route("blog/new").post(createBlog);

module.exports = router;