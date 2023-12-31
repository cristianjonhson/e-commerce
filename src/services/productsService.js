/* eslint-disable no-unused-vars */
import axios from "axios";

export async function getProducts() {
  return await axios.get('https://dummyjson.com/products')
}
