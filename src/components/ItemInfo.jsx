import React from "react";

const ItemInfo = ({ item }) => {
  

  return (
    <section>
      <div>
        <img
          alt={item.name} 
          src={item.image}
        />
        <div>
          <h3>
            <strong>Address:</strong> {item.address}
          </h3>
          
        </div>
        <div>
          <h3>
            <strong>Contact:</strong> {item.phone}
          </h3>
          
        </div>
      </div>
    </section>
  );
};

export default ItemInfo;
