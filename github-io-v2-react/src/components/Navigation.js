import { Link } from "react-router-dom"

const Navigation = () => {
    return (
    <nav className="nav justify-content-center">   
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/blogs'>Blogs</Link>
        <Link className="nav-link" to='/projects'>Projects</Link>
        <Link className="nav-link" to='/social'>Social Media</Link>   
    </nav>
    )
}


export default Navigation
