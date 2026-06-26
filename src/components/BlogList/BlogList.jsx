
const BlogList = ({blogs, title}) =>{
    return (
        <div>
            <h5 className="border-bottom border-3 border-danger py-3">
                {title}
            </h5>
            {
                blogs.map((blog, index)=> {
                    return (
                        <div className="card shadow bg-tertiary m-2 p-2" key={blog.id}>
                            <h5> {index + 1} . {blog.blogTitle}</h5> 
                            <p>{blog.blogContent?.substring(0,90)} . . .</p>
                            <button className="btn btn-outline-primary btn-sm">
                                Read More
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogList;