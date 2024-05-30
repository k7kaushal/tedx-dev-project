import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Currblogimg from './nakshatra.jpg'
import { Container, Col, Row, Button, CardGroup } from "react-bootstrap";
import styles from './blogstyles.module.css'
import {BsArrowRight } from  "react-icons/bs";
function Currblog() {
    return (
        <div className={styles.container}>
        <Row>
            
            <Col lg={5} md={12} sm={12} xs={12}>
                <div className={styles.imgdiv}>
                    <img className={styles.Currblogimg} src={Currblogimg} alt=""/>
                </div>
                
            </Col>
            <Col lg={7} md={12} sm={12} xs={12} className={styles.descrip}>
                 <p  style={{fontWeight:"450"}}>Februrary 26, 2023</p>
                 <p className={styles.name} style={{textAlign:"left",color:"red"}}>Nakshatra</p>
                 <p className={styles.content} style={{textAlign:"justify",fontWeight:"350",padding:"10px",fontSize:"1.1rem"}}>And the stars shone bright in their own right. Centers of their own solar systems. Hundreds of celestial bodies revolving around them, reverently. But when us humans looked up at the sky, we saw art. We saw stories. We saw fate. We saw music. We saw peace. And on the dark purple canvas above us covered with shining, twinkling dots, we saw नक्षत्र. At TEDxPICT, this year’s theme “Nakshatra” explores the similarities between our lives and nakshatras.</p>
                 {/* <a href="https://blogs.tedxpict.com/marcato" target="_blank" style={{ color: "red" , textAlign: "center"}} className="icons"><button className={styles.readmore_button}>Read more<BsArrowRight size="2rem"/></button></a> */}
            </Col>
        </Row>
            
        </div>
    )
}

export default Currblog
