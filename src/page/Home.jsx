import React from "react";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Product />
    </Layout>
  );
};

export default Home;
