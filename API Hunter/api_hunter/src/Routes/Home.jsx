import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <div style={{display:"flex",justifyContent:'space-around'}}>
    <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
      
      <p>Too go our products DashBoard page to click Home link....</p>
    </div>
  );
}
export default Home;
