const express = require('express');
const {createBlog, getAllBlogs} = require('../controllers/blogController');

const router = express.Router(0);

router.route("/blogs").get(getAllBlogs);
router.route("/blog/new").post(createBlog);

module.exports = router;