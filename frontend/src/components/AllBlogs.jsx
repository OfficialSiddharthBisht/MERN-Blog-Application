import React from 'react'
import axios from 'axios'
import IndividualBlog from './IndividualBlog';

function AllBlogs() {
    const [blogData, setBlogData] = React.useState([]);
    
    React.useEffect(()=>{
        axios.get("http://localhost:4000/api/v1/blogs").then((res)=>{
            setBlogData(JSON.stringify(res.data.blogs));
        })
    },[]);
  return (
    <>
    <div>
        {blogData && blogData.map(blog =>(
            <IndividualBlog blog = {blog} />
        ))
        }
    </div>
    </>
  )
}

export default AllBlogs;