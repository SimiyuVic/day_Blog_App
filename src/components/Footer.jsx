import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaGithub , FaLinkedin, FaDiscord} from "react-icons/fa";



const Footer = () => {
    return ( 
        <div className="container-fluid bg-dark">
            <div className="container">
                <div className="row text-light">
                    <div className="col-md-4 mt-3">
                        <h5 className="border-bottom py-3">
                            About us
                        </h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate incidunt fuga nemo dolore quidem hic?
                        </p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h5 className="border-bottom py-3">
                            Reach Us Through
                        </h5>
                        <h6 className="fw-bold">
                          <span className="me-3"> <IoCall /></span>+2547939373673
                        </h6>
                        <h6 className="fw-bold">
                          <span className="me-3"> <IoIosMail /></span>info@blogapp.com
                        </h6>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h5 className="border-bottom py-3">
                            Our Social Handles
                        </h5>
                        <div className="d-flex">
                            <h5 className="m-3">
                                <FaGithub />
                            </h5>
                            <h5 className="m-3">
                                <FaLinkedin />
                            </h5>
                            <h5 className="m-3">
                                <FaDiscord />
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;