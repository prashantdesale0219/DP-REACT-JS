const Header=()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-around",width:"100%",margin:"auto",borderBottom:"2px solid black",backgroundColor:"#FFF6E9"}}>
            <div style={{display:"flex"}}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/69af3410207181.560e3178344f4.png" height={70} alt="" /><h2>MASTERCHEF</h2>
            </div>
            <ul style={{display:"flex",listStyle:"none",margin:"25px",fontWeight:"600"}}>
                <li style={{paddingRight:"20px"}}>HOME</li>
                <li style={{paddingRight:"20px"}}>ABOUT US</li>
                <li style={{paddingRight:"20px"}}>TERMS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Header