import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Services/Firebase';

const Description = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const GetData = async (id) => {
    let datas = await getDoc(doc(db, "products", id));
    setData(datas.data());
  }

  const { title, price, category, description, image } = data;

  useEffect(() => {
    if (id) {
      GetData(id);
    }
  }, [id]);

  return (
    <div className="description-container">
      <h1>{title}</h1>
      <img src={image} alt={title} height={300} width={300} />
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Description;
