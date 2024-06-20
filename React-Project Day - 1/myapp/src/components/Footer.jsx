import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer =()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"45px", backgroundColor:"#FFF6E9", height:"93px",color:"white",borderTop:"2px solid black"}}>
            <ul style={{display:"flex",justifyContent:"end",listStyle:"none"}}>
                <li><FaSquareInstagram style={{color:"#F075AA",fontSize:"30px",paddingRight:"8px"}} /></li>
                <li><FaFacebookSquare style={{color:"blue",fontSize:"30px",paddingRight:"8px"}} /></li>
                <li><FaTwitterSquare style={{color:"#3ABEF9",fontSize:"30px",paddingRight:"8px"}} /></li>
                <li><FaWhatsappSquare style={{color:"#06D001",fontSize:"30px",paddingRight:"8px"}} /></li>
            </ul>
           
           <h5 style={{color:"black"}}>Masterchef@gmail.com</h5>
        </div>
    )
}

export default Footer