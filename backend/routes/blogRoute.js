const express = require('express');
const {createBlog, getAllBlogs, updateBlog, deleteBlog} = require('../controllers/blogController');

const router = express.Router(0);

router.route("/blogs").get(getAllBlogs);
router.route("/blog/new").post(createBlog);
router.route("/blog/:id").put(updateBlog).delete(deleteBlog);

module.exports = router;