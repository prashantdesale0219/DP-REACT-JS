import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../Services/Firebase';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);

  const getDataFromFirebase = () => {
    getDocs(collection(db, "products")).then(res => {
      let newArray = res.docs.map((el) => ({ ...el.data(), id: el.id }));
      setProductsData(newArray);
    }).catch(err => console.log(err));
  };

  const DeleteBtn = async (id) => {
    await deleteDoc(doc(db, "products", id)).then(res =>
      getDataFromFirebase()
    ).catch(err => console.log(err));
  };

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  return (
    <div className="products-grid">
      {productsData.map((el) => (
        <div key={el.id} className="product-card">
          <h2>{el.title}</h2>
          <Link to={`/description/${el.id}`}>
            <img src={el.image} alt={el.title} className="product-image" />
          </Link>
          <h3>{el.category}</h3>
          <h3>{el.price}</h3>
          <button className="edit-btn">
            <Link to={`/editPage/${el.id}`} style={{color:"white",textDecoration:"none"}}>Edit</Link>
          </button>
          <button onClick={() => DeleteBtn(el.id)} className="delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
