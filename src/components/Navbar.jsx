import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-4">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-danger" to="/">
                        DEvcON
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-blog">
                                    New Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link">
                                    All Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact-Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;