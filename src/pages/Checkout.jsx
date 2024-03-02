import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing-form">
                <FormGroup className="form-group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout-cart">
                <h6>
                  Total Qty : <span>{totalQty} items</span>{" "}
                </h6>

                <h6>
                  Subtotal : <span>{totalAmount} AED</span>
                </h6>

                <h6>
                  <span>
                    Shipping : <br /> Free shipping
                  </span>
                  <span>0 AED</span>
                </h6>

                <h4>
                  Total cost : <span>{totalAmount} AED</span>
                </h4>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy-btn w-100"
                >
                  <Link to="#"> Place an order</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
