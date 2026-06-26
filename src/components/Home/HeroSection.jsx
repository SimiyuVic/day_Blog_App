import { FaArrowRight, FaBookOpen } from "react-icons/fa";


const HeroSection = () => {
    return ( 
        <div className="container mt-1">
            <div className="card shadow-lg border-0 shadow overflow-hidden">
                <div className="row g-0">

                    {/* Left side */}
                    <div className="col-md-6  align-items-center justify-content-center bg-info text-white p-5">
                        <h3 className="fw-bold mt-5">
                            DEvcON
                        </h3>
                        <h5>
                            Let us take your Development journey a Notch higher!
                        </h5>
                        <button className="btn btn-danger mt-3 fw-bold me-4 py-3">
                            <span className="me-3 ">Get Started </span> <FaArrowRight />
                        </button>
                        <button className="btn btn-warning text-light fw-bold mt-3 py-3">
                            Read Blogs <span className="ms-3"><FaBookOpen /></span>
                        </button>
                    </div>

                    {/* Right side */}
                    <div
                        className="col-md-6"
                        style={{
                            backgroundImage: "url('/bg.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: "350px",
                        }}
                    ></div>

                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;