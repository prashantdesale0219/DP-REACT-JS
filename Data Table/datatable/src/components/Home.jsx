import React from "react";
const Home = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "5% auto",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h2>goods and products</h2>
         <p> Differences between goods and products: Tangibility: Goods are
          tangible items that can be physically seen and touched, while products
          can be either tangible or intangible, such as services. Purpose: Goods
          are produced to meet consumer needs, while products are created to
          meet consumer demands and make a profit.A good is an "economic good"
          if it is useful to people but scarce in relation to its demand so that
          human effort is required to obtain it.[3] In contrast, free goods,
          such as air, are naturally in abundant supply and need no conscious
          effort to obtain them. Private goods are things owned by people, such
          as televisions, living room furniture, wallets, cellular telephones,
          almost anything owned or used on a daily basis that is not
          food-related. A consumer good or "final good" is any item that is
          ultimately consumed, rather than used in the production of another
          good. For example, a microwave oven or a bicycle that is sold to a
          consumer is a final good or consumer good, but the components that are
          sold to be used in those goods are intermediate goods. For example,
          textiles or transistors can be used to make some further goods.
          Commercial goods are construed as tangible products that are
          manufactured and then made available for supply to be used in an
          industry of commerce. Commercial goods could be tractors, commercial
          vehicles, mobile structures, airplanes, and even roofing materials.
          Commercial and personal goods as categories are very broad and cover
          almost everything a person sees from the time they wake up in their
          home, on their commute to work to their arrival at the workplace.</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoKkKJbmgO3tZbv1czXX7R_4A4CuY_9mEDA&s"
            width={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
