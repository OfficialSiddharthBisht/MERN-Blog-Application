import React from 'react'

function IndividualBlog({blog}) {
  return (
    <div>
        <h2>{blog.title}</h2>
        <div>
            <p>{blog.content}</p>
        </div>
    </div>
  )
}

export default IndividualBlog