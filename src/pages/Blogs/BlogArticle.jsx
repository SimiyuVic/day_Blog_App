import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch.js"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BlogArticle = () => {
    const { id } = useParams();
    const redirect = useNavigate();
    const { allData: blog, loading, error} = useFetch(`http://localhost:3000/blogs/${id}`);


    const deleteBlog = async() =>{
        try
        {
            await axios.delete(`http://localhost:3000/blogs/${id}`);

            redirect("/");

            toast.success("Blog Deleted Succesfully");
        }
        catch(error)
        {
            toast.error("Cannot Delete Blog!");
        }
    }
    

    return ( 
        <div>
            {loading && <h4 className="text-success fw-bold">Loading Blog . . .</h4> }
            {error && <h4 className="text-danger">{error}</h4> }
            {blog &&
            <div className="container mt-3">
                <h4>
                    {blog.blogTitle}
                </h4>
                <div>
                    <img
                    src={blog.blogImage}
                    style={{
                        width: "60%",
                        height: "600px"
                    }}
                    className="text-center mb-2"
                    />
                </div>
                <h4>
                    {blog.blogTitle}
                </h4>
                <p className="text-muted">
                    {blog.blogContent}
                </p>

                <button className="btn btn-danger my-3" onClick={deleteBlog}>
                    Delete Blog
                </button>
            </div>}
        </div>
     );
}
 
export default BlogArticle;