import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const redirect = useNavigate();

    const submitForm = async(e)=>{
        e.preventDefault();
        try
        {
            const userMessage = { email, name, message }
            await axios.post("http://localhost:3000/conta   ct", {
                userMessage
            });

            redirect("/");
            toast.success("Message Submitted Successfully")
        }
        catch(error)
        {
            toast.error("Cannot Submit Form")
        }
        finally{
            message: "";
            name: "";
            email: "";
        }
    }

    return ( 
        <div className="container my-2">
            <div className="row justify-content-center">
                <div className="col-md-7 card shadow-lg p-4">
                    <h4 className="text-center p-3">Leave us a Message</h4>
                    <form onSubmit={submitForm}>

                        <div className="form-floating mb-3">
                            <input 
                            type="email" 
                            className="form-control" 
                            required id="floatingInput" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Leave us Your Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                            type="text" 
                            required 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Your Name" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />

                            <label htmlFor="floatingInput">Leave us Your Name</label>
                        </div>

                        <div className="form-floating"> 
                            <textarea 
                            className="form-control" 
                            required 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea2" 
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            style={{
                                height: "200px",

                            }} 
                            />
                            <label htmlFor="floatingTextarea2">Leave us Your Message</label>
                        </div>

                        <button className="btn btn-primary mt-3">
                            Submit Message
                        </button>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;