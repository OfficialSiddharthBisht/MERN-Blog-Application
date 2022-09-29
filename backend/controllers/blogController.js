const Blog = require('../models/blogModel');

// Create Blog
exports.createBlog = async(req ,res ,next) =>{
    const blog = await Blog.create(req.body);
    res.status(201).json({
        success : true,
        blog
    });
};

// Get all blogs 
exports.getAllBlogs = async(req ,res) =>{
    const blogs = await Blog.find();
    res.status(200).json({
        success : true,
        blogs
    })
}

// Update Exhisting Blog
exports.updateBlog = async(req ,res ,next) =>{
    let blog = await Blog.findById(req.params.id);
    if(!blog){
        return res.status(500).json({
            success :false,
            message : "Blog not found"
        })
    }
    blog = await Blog.findByIdAndUpdate(req.params.id,req.body,{
      new : true,
      runValidators : true,
      useFindAndModify : false,  
    });
    res.status(200).json({
        success :true,
        blog
    })
}
