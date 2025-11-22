import React from "react";
import GoodsCard from "./GoodsCard";
import "./GoodsGallery.css";

const products = [
  {
    image: "https://st.depositphotos.com/1000141/4729/i/450/depositphotos_47296063-stock-photo-ripe-apple-with-leaf.jpg",
    name: "Apple",
    price: 45
  },
  {
    image: "https://th.bing.com/th/id/R.459c4135547d635e94f7d25f9b5d12a7?rik=Ck4G5SVzy4zEoA&pid=ImgRaw&r=0",
    name: "Pear",
    price: 85
  },
  {
    image: "https://www.ayzdorov.ru/images/Travi/vinograd-kyltyrnii.jpg",
    name: "Grape",
    price: 125
  },
  {
    image: "https://www.sloditech.com/wp-content/uploads/2022/04/Ananas-piece.jpeg",
    name: "Pineapple",
    price: 225
  },
  {
    image: "https://asian-veggies.com/cdn/shop/files/coralchampagne_1024x1024.png?v=1686011240",
    name: "Cherry",
    price: 345
  },
  {
    image: "https://tse2.mm.bing.net/th/id/OIP.Z7THW1asvNjYhT3Uve9JWgHaGk?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Peach",
    price: 175
  },
  {
    image: "https://th.bing.com/th/id/R.bd1a844516ecad66d66d7999a3760a18?rik=IIfOySc%2fsRc%2ftQ&pid=ImgRaw&r=0",
    name: "Banana",
    price: 75
  },
  {
    image: "https://i.pinimg.com/736x/3d/03/f5/3d03f578fce3a69e63b8b67bffc502c3.jpg",
    name: "Strawberry",
    price: 425
  }
];

const GoodsGallery = () => {
  return (
    <div className="gallery">
      {products.map((product, index) => (
        <GoodsCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default GoodsGallery;
