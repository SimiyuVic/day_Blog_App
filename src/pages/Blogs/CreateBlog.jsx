import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateBlog = () => {

    const [blogTitle, setBlogTitle] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");
    const [blogImage, setBlogImage] = useState("");
    const [blogCategory, setBlogCategory] = useState("");
    const [blogContent, setBlogContent] = useState("");

   const handleCreateBlog = async(e) =>{
        e.preventDefault();

        try
        {
            const myBlog = {blogTitle, blogAuthor, blogImage, blogCategory, blogContent}

            const response = await axios.post("http://localhost:3000/blgs", {
            myBlog 
            });

            toast.success("Blog Created Successfully!");
        }
        catch(error)
        {
            toast.error("Cannot Create Blog");
        }
   }


    return ( 
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-8 card shadow p-4">
                    <h4 className="text-center text-muted">
                        Create New Blog!
                    </h4>
                    <form onSubmit={handleCreateBlog}>
                        <div className="form-floating mb-3">
                            <input 
                            type="text" 
                            required 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Blog Title" 
                            value={blogTitle}
                            onChange={(e)=>setBlogTitle(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Blog Title</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                            type="text" 
                            required 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Blog Author" 
                            value={blogAuthor}
                            onChange={(e)=>setBlogAuthor(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Author Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                            type="text" 
                            required 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Blog Image" 
                            value={blogImage}
                            onChange={(e)=>setBlogImage(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Image Url</label>
                        </div>

                        <div class="form-floating mb-3">
                            <select 
                            class="form-select" 
                            aria-label="Floating label select example"
                            value={blogCategory}
                            onChange={(e)=>setBlogCategory(e.target.value)}
                            >
                                <option >Select Category</option>
                                <option>NodeJs</option>
                                <option>MOngoDB vs SQL</option>
                                <option>Introduction to ReactJs</option>
                            </select>
                            <label for="floatingSelect">Select Category</label>
                        </div>

                        <div className="form-floating"> 
                            <textarea 
                            className="form-control" 
                            required 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea2" 
                            value={blogContent}
                            onChange={(e)=>setBlogContent(e.target.value)}
                            style={{
                                height: "250px",

                            }} 
                            />
                            <label htmlFor="floatingTextarea2">Type your Blog</label>
                        </div>

                        <button className="btn btn-primary mt-3">
                            Create Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default CreateBlog;