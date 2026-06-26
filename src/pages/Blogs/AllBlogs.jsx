import BlogCard from "../../components/BlogCard/BlogCard";
import useFetch from "../../hook/useFetch";

const AllBlogs = () => {

    const { allData: blogs, error, loading } = useFetch("http://localhost:3000/blogs");

    return ( 
        <div className="container">
            {loading && <h4 className="text-success fw-bold">Loading Blogs . . .</h4> }
            {error && <h4 className="text-danger">{error}</h4> }
            {blogs && <BlogCard blogs={blogs} />}
        </div>
     );
}
 
export default AllBlogs;