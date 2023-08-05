import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // const dispatch = useDispatch();
  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  ]
  return (
    <div className="product">

      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img
            src={images[selectedImg]}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio nostrum excepturi nobis autem quas maiores nemo
          voluptatum libero eaque adipisci magnam ex mollitia,
          eum odit voluptatibus ratione nam maxime quaerat.</p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
        // onClick={() =>
        //   dispatch(
        //     addToCart({
        //       id: data.id,
        //       title: data.attributes.title,
        //       desc: data.attributes.desc,
        //       price: data.attributes.price,
        //       img: data.attributes.img.data.attributes.url,
        //       quantity,
        //     })
        //   )
        // }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;