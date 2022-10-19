import {Routes,Route } from "react-router-dom"
import Admin from "./Admins"
import Staff from "./Staff"
import User from "./User"
import { Link }  from "react-router-dom"
import DashboardHome from "./dashboardHomeScree"
import { useState } from "react"


function Dashboard () {

const [showDashboard,setShowDashboard] = useState(false)

const ShowDashboard = () => {
    setShowDashboard(true)
}


    return (
        <div className="dash-container">
            {showDashboard?
            <div className="dash-container">
            <div className="dash-inner-container">
                <div className="dash-content">
        <h1>Dashboard</h1>
        </div>
            <div className="dashboard-button-div">
            <Link to="Admin" ><button> Admin</button></Link> <br />
            <Link to="Staff"><button> Staff</button></Link> <br />
            <Link to="User"><button> User</button></Link>
            </div>
            </div>
            <div className="screen-show">
            <Routes>      
                <Route path="Admin" element={<Admin/>} />
                <Route path="Staff" element={<Staff/>} />
                <Route path="User" element={<User/>} />
            </Routes>
            </div></div>:
            <div className="screen-show-div">
            <Routes>      
                <Route path="/" element={<DashboardHome onClick = {ShowDashboard}/>} />
            </Routes>
            </div>}
            
        </div>
    )
}

export default Dashboard