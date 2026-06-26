import BlogCard from "../../components/BlogCard/BlogCard";
import useFetch from "../../hook/useFetch";
import { useState } from "react";

const AllBlogs = () => {

    //const { allData: blogs, error, loading } = useFetch("http://localhost:3000/blogs");
    const [error, setError] = useState(null);
       // const [loading, setLoading] = useState(true);
        const [blogs, setBlogs] = useState([
            {
          "id": 2,
          "blogCategory": "Trending",
          "blogTitle": "NodeJs",
          "blogImage": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
          "blogAuthor": "Victor Charles",
          "blogContent": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit,Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla li Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non.bero impedit, quas consequatur tempora dolorum odit non. amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. quas consequatur tempora dolorum odit non."
        },
        {
          "id": 3,
          "blogTitle": "MongoDB",
          "blogImage": "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8fDA%3D",
          "blogAuthor": "Victor Charles",
          "blogContent": "Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non.adipisicing elit. Error, quos saepe aspernatur quasi nulla libero impedit, quas consequatur tempora dolorum odit non."
        },
        ])

    return ( 
        <div className="container">
            {/* {loading && <h4 className="text-success fw-bold">Loading Blogs . . .</h4> } */}
            {error && <h4 className="text-danger">{error}</h4> }
            {blogs && <BlogCard blogs={blogs} />}
        </div>
     );
}
 
export default AllBlogs;