import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Product from "./Product";
import axios from "axios";
import { addProducts } from "../actions";
import { priceFilter } from "../actions";

function Cart(props) {
  const { products } = props;
  console.log(products);
  useEffect(() => {
    const fetProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        props.dispatch(addProducts(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetProduct();
  }, []);
  const handleSelect = (e) => {
    console.log(e.target.value);
    props.dispatch(priceFilter(e.target.value));
  };
  return (
    <div className="cart">
      <Navbar />
      <div className="filter">
        <label for="price" id="price">
          Sort By Price:
        </label>
        <select name="pricefilter" onChange={handleSelect}>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
        </select>
      </div>

      {products.map((item) => (
        <Product key={item.id} Item={item} dispatch={props.dispatch} />
      ))}
    </div>
  );
}

function mapState(state) {
  return {
    products: state.products,
  };
}

const connectedCartComponents = connect(mapState)(Cart);

export default connectedCartComponents;
