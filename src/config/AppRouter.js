import { BrowserRouter as Router,Routes,Route, NavLink } from "react-router-dom"
import Dashboard from "../screens/Dashboard"
import { Link } from "react-router-dom"
import Home from "../screens/Home"
import About from "../screens/About"
import Contact from "../screens/Contact"
import Login from "../Login"

function AppRouting () {
    return (
       <div className="container">

       <Router>
        <div className="nav-container">
        <div className="inner-container">
        <NavLink to="/"> <button> Home </button></NavLink>
        <NavLink to="About"><button> About </button></NavLink>
        <NavLink to="Services"><button> Services </button></NavLink>
        <NavLink to="Contact"><button> Contact </button></NavLink>
        <NavLink to="Login"><button> Login </button></NavLink>
        </div>
        </div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Services/*" element={<Dashboard/>} />
        <Route path="Contact/*" element={<Contact/>} />
        <Route path="Login" element={<Login/>} />
        </Routes>



       </Router> 
       </div>
    )
}


export default AppRouting




