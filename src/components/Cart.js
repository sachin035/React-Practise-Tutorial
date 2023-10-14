import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = productCart.map((product) => (
    <div className="col-md-12" key={product.id}>
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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove item
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

export default Cart;
