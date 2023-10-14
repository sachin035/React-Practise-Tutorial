import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  console.log(products);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "140px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>INR.{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white", textAlign: "center" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1 style={{ alignItems: "center" }}>Product Dashboard</h1>
      {/*  aba yo chai console.log nagari cdda page ma nai load garnu paryo vane esari use gaarda huncha */}
      {/* {JSON.stringify(products)} */}

      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
