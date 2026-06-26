import useFetch from "../../hook/useFetch.js";
import BlogCard from "../BlogCard/BlogCard";
import BlogList from "../BlogList/BlogList.jsx";


const RecentBlogs = () => {

    const { allData: blogs, error, loading }= useFetch("http://localhost:3000/blogs");

    return ( 
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-md-8">
                    {loading && <h4 className="text-success fw-bold">Loading Blogs . . .</h4> }
                    {error && <h4 className="text-danger">{error}</h4> }
                    {blogs && <BlogCard blogs={blogs.slice(0,2)}  title={"Recent Blogs"}/>}
                 </div>
                <div className="col-md-4 border-start border-3">
                   {blogs && <BlogList blogs={blogs.filter((blog)=>blog.blogCategory === "Trending")} title={"Trending Blogs"}/> }
                </div>
            </div>
        </div>
     );
}
 
export default RecentBlogs;
