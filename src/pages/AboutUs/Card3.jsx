import React from 'react'

import { Container, Col, Row, Button ,Card} from "react-bootstrap";
import img from './boy.jpg';
import { AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
import styles from './cardstyles.module.css';



function CardFunc(props) {
    return (
        <div style={{ margin:"30px"}}>
            <Card style={{ width: '12.2rem' ,textAlign:'center', }}>
            <Card.Img variant="top" style={{height:'12rem'}} className={styles.imgtop} src={props.img}></Card.Img>
            <Card.Body >
                <Card.Title style={{fontStyle:"bold"}} >
                    {props.name}
                </Card.Title>
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardFunc
