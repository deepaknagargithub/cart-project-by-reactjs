// action type
import axios from "axios";
export const Add_Products = "Add_Products";
export const Delete_Result = "Delete_Result";
export const Filter_Result = "Filter_Result";

// action creator

export function addProducts(data) {
  return {
    type: Add_Products,
    products: data,
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    window.location.reload();
  };
}
export function priceFilter(price) {
  console.log(price);
  return {
    type: Filter_Result,
    price: price,
  };
}
