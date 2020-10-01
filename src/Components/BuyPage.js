import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Axios from "axios";
import { random, commerce } from "faker";
import CartItem from "./CartItem";

const apiKey = "563492ad6f9170000100000130c6e19e177442a0bcf02dccd420ce5b";
const pexelsUrl =
  "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localUrl =
  "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addInCart }) => {
  const [product, setProdut] = useState([]);

  const fetchPhotos = async () => {
    // const pexelsUrlResponse = await Axios.get(pexelsUrl, {
    //   headers: {
    //     Authorization: apiKey,
    //   },
    // });
    // const { data } = pexelsUrlResponse;
    // const { photos } = data;

    const localUrlResponse = await Axios.get(localUrl);
    const { data } = localUrlResponse;
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProdut(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((singleProduct) => (
          <Col md={4} key={singleProduct.id}>
            <CartItem product={singleProduct} addIncart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
