import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/home 1.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/services";
import ProductsList from "../components/UI/ProductsList";
import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <p className="hero-subtitle"> Trending product in {year} </p>
                <h5> Online furniture and home decor store in UAE</h5>
                <p>
                  Keeping this at the heart of everything we do, we serve a
                  rapidly evolving clientele, keeping them in touch with the
                  latest, enabling them to express their individuality.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn">
                  {" "}
                  <Link to="/shop">Shop Now</Link>{" "}
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending-products">
        <Container>
          <Row>
            <Col lg="12" className="text-conter mb-5">
              <h2 className="section-title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best-sales">
        <Container>
          <Row>
            <Col lg="12" className="text-conter mb-5">
              <h2 className="section-title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer-count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count-down-col">
              <div className="clock-top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy-btn store-btn"
              >
                <Link to="/shop">Visit Our Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter-img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new-arrivals">
        <Container>
          <Row>
            {" "}
            <Col lg="12" className="text-conter mb-5">
              <h2 className="section-title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular-category">
        <Container>
          <Row>
            {" "}
            <Col lg="12" className="text-conter mb-5">
              <h2 className="section-title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
