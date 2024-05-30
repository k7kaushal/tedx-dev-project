import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img1 from "./aditya-ganeshwade.jpeg"
import img2 from "./prachi-agarkar.jpeg"
import img3 from "./priyanshi.jpeg"
import img4 from "./tapan-chaudhary.jpeg"
import img5 from "./rohit-mote.jpeg"
import {Container, Row, Col} from 'react-bootstrap';
function OurSpeakers7() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <Container>
            <h2 data-aos="fade-up" className={styles.h21}>Our&nbsp;<font color="red">speakers</font></h2>
         <Container>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img1} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8} md={12} sm={12}>
             <p  className={styles.name}><font color="red">Aditya Ganeshwade</font></p>
             {/* <h3 className={styles.adj}>Radiant | Inspiring | Resourceful</h3> */}
             <p className={styles.paragraph}>A distinguished individual whose early fascination with the dynamic and exhilarating sport of Roll Ball has carved a remarkable path for him. Initially embarking on his athletic journey as a Speed Skater, Mr. Ganeshwade quickly rose to prominence as a stellar Roll Ball player. As the captain of the Indian Roll Ball team, his exceptional leadership skills steered the team to multiple world championship victories, earning him several nominations for the prestigious Arjuna Award. Moreover, he is renowned as a record-setting goal scorer in the sport.</p>
             </Col>
         </Row>
         <br></br>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row justify-content-center">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Prachi Agarkar</font></p>
             {/* <h3 className={styles.adj}>Articulate | Energetic | Insightful </h3> */}
             <p className={styles.paragraph}> Prachi Agarkar, an individual of multifaceted talents, embodies this blend. With a professional background in business administration and a heart devoted to culinary arts, she has established herself as an eminent figure in the culinary landscape, particularly noted for her achievements in MasterChef India.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img2} alt=""/>
             </Col>
             
         </Row>         <br></br>

         <hr></hr>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img3} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8}  md={12} sm={12}>
             <p  className={styles.name}><font color="red">Priyanshi Jariwala</font></p>
             {/* <h3 className={styles.adj}> Knowledgeable | Diligent | Curious </h3> */}
             <p className={styles.paragraph}>Meet style icon, Priyanshi Jariwala, the empowering founder of the sustainable, low-waste fashion startup, The Khadi Cult, aimed at making the indigenous fabric Khadi more appealing to millennials and Gen-Z through fun and quirky prints. A while back, Priyanshi sensed a moral conflict in producing more clothes and took a bold step by shifting her focus to Just Po Stuff, an amazing thrift initiative. Through this venture, she helps people sell their pre-worn clothes.</p>   
             </Col>
         </Row>
         <br></br>

         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Tapan Chaudhary</font></p>
             {/* <h3 className={styles.adj}>Compassionate | Innovative | Dedicated</h3> */}
             <p className={styles.paragraph}>Tapan Chaudhari, an ardent nature enthusiast, a pioneering rural entrepreneur, and the founder of "The Jungle Farm," is at the forefront of redefining the tourism paradigm. His advocacy goes beyond the ordinary tourist experience, focusing on the promotion of rural entrepreneurship. This includes celebrating local culinary traditions, accentuating the richness of cultural heritage, and fostering a deep bond with local biodiversity.</p>   
             </Col>
             <Col data-aos="fade-left"lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img4} alt=""/>
             </Col>
             
         </Row>
         <br></br>

         <hr></hr>
         
         <Row >
            <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} style={{height:"18rem"}} src={img5} alt=""/>
             </Col>
            <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Rohit Mote</font></p>
             {/* <h3 className={styles.adj}>Visionary | Driven | Entrepreneurial</h3> */}
             <p className={styles.paragraph}>Mr. Rohit Mote. An esteemed alumnus of PICT and a distinguished figure in the realm of artificial intelligence, Mr. Mote is not only an advocate but also an active contributor to the philosophy he espouses through his numerous initiatives. As a co-founder of Growthyfai, his mission is to harness the transformative potential of AI to empower individuals and guide them towards achieving excellence in their respective domains.</p>   
             </Col>
         </Row>
         <br></br>
         <hr></hr>
         {/* <Row>
         <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img2} alt=""/>
             </Col>
             
         <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Anurag Kumar Singh</font></p>
             <h3 className={styles.adj}>Energetic | Vibrant | Virtuoso</h3>
             <p className={styles.paragraph}>The speaker Anurag Kumar Singh the guitarist of the After Acoustics band elucidates the fact that "being eccentric" is not only just okay but can also create wonders at times.
                The band has performed with revered artists like Mr. Shankar Mahadevan, Vishal Dadlani, Pritam, Agnee, Indian Ocean, Benny Dayal, and Hariharan. The band has also been a part of the biggest banners like  HORNBILL FESTIVAL, MOOD INDIGO, MUSIC MOJO KAPPA TV making various college fests vibrant and winning awards as well. Watch the speaker throw up an energetic performance along with his co-artists Gaurav Wavhal and Akarsh Shetty.
                </p>
             </Col>
         </Row> */}
       </Container>
        </Container>
         
        
    )
}
export default OurSpeakers7