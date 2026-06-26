import { Link } from "react-router-dom";

const BlogCard = ({ blogs, title, deleteBlog}) => {

    return ( 
        <div>
            <h4>
                { title }
            </h4>
            {
                blogs.map((blog)=>(
                    <div className="card shadow-lg my-3" key={blog.id}>
                        <div className="row">
                            {/* Image */}
                            <div className="col-md-3">
                                <img
                                    className="img-fluid"
                                    src={blog.blogImage}
                                    alt={blog.blogTitle}
                                    style={{
                                        height: "200px",
                                        objectFit: "cover",
                                        width: "100%"
                                    }}
                                />
                            </div>
                            {/* Blog Details */}
                            <div className="col-md-9 my-1">

                                <h4 className="text-danger px-2">
                                    { blog.blogTitle }
                                </h4>

                                <h6 className="text-success px-2">
                                    { blog.blogAuthor }
                                </h6>

                                <p className="text-muted px-3">
                                    { blog.blogContent?.substring(0,100) }...
                                </p>
                                <div className="p-3">
                                    <Link className="btn btn-outline-primary btn-sm" to={`/article/${blog.id}`}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogCard;