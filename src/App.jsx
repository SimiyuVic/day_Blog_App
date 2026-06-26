import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/Home/HomePage.jsx"
import CreateBlog from "./pages/Blogs/CreateBlog.jsx"
import AllBlogs from "./pages/Blogs/AllBlogs.jsx"
import BlogArticle from "./pages/Blogs/BlogArticle.jsx"
import Contact from "./pages/contact/Contact.jsx"
import { ToastContainer } from "react-toastify"
//import ContactSuccess from "./pages/contact/ContactSuccess.jsx"

function App() {

  return (
    <div className="vh-100">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/article/:id" element={<BlogArticle />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
