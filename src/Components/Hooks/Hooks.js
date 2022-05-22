import { useEffect, useState } from "react";


const useProducts = (refresh) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://secret-dawn-55524.herokuapp.com/ators")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  },[refresh]);
  return [products, setProducts];
};

export default useProducts;
