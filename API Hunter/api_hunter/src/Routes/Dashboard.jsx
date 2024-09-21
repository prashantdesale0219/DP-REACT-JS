import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextApi";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {auth,logoutUser} = useContext(AuthContext)

  const getProductData = async () => {
      try {
          const  responseData  = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
          setData(responseData.data.data);
          setLoading(false);
      } catch (err) {
          console.error(err);
          setError('Failed to fetch data');
          setLoading(false);
      }
  };

  useEffect(() => {
      getProductData();
  }, []);

  return loading ? <Loader/> : error ? <h1>something went wrong</h1>:(
    <div>
      <h2>Dashboard</h2>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser} style={{backgroundColor:'#059212',color:'white',border:'none',padding:'10px 20px',borderRadius:'10px',fontWeight:'600',fontSize:'18px'}}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{auth.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductsTable data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
