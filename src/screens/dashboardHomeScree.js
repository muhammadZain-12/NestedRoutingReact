
function DashboardHome (prop) {
console.log(prop.onClick)

    return(

        <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <div className="dash-button">
            <button onClick={prop.onClick} >Show Dashboard</button>
            </div>
            <div className="dash-content">
            <h1>This is the dashboard Home page</h1>
            </div>
        </div>
    )
}

export default DashboardHome