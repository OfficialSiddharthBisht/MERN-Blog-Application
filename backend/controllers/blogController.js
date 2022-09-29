const Blog = require('../models/blogModel');

// Create Blog
exports.createBlog = async(req ,res ,next) =>{
    const blog = await Blog.create(req,body);
    res.status(201).json({
        success : true,
        blog
    });
};

