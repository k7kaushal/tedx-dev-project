import React from "react";

import { Container, Col, Row, Button, Card } from "react-bootstrap";

import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import styles from "./cardstyles.module.css";

function CardFunc(props) {
  return (
    <div classname="nakspeakrs " style={{ margin: "20px" }}>
      <Card style={{ textAlign: "center" }}>
        <Card.Img
          variant="top"
          className={`${styles.imgtop}`}
          style={{ border: "2px solid #94692C" }}
          src={props.img}
        ></Card.Img>
      </Card>
    </div>
  );
}

export default CardFunc;
