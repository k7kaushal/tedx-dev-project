import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img1 from "./devangana.jpg"
import img2 from "./anagha-bhat.jpg"
import img3 from "./vishwajeet.jpg"
import img4 from "./bhavna.jpg"
import img5 from "./soubhik.png"
import img6 from "./rasik.png"
import {Container, Row, Col} from 'react-bootstrap';
function OurSpeakers6() {
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
             <p  className={styles.name}><font color="red">Devangana Lashkary</font></p>
             <h3 className={styles.adj}>Radiant | Inspiring | Resourceful</h3>
             <p className={styles.paragraph}>Devangana Lashkary is an environmental researcher, a nature lover, and a sustainable travel influencer who inspires travelers to explore the world responsibly. She advocates for the preservation of nature and educates people on how to make small but conscious changes in their daily lives to save the planet. Her project leadership role at CERE's Urban Afforestation Project showcases her passion for improving the environment.</p>
             </Col>
         </Row>
         <br></br>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row justify-content-center">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Dr.  Anagha Bhat-Behere</font></p>
             <h3 className={styles.adj}>Articulate | Energetic | Insightful </h3>
             <p className={styles.paragraph}>Dr. Anagha Bhat-Behere is a distinguished linguist and scholar, passionate about exploring the nuances of languages and their impact on culture. Her work in translating and compiling dictionaries reflects her dedication to bridging linguistic barriers and fostering cross-cultural understanding. She has a deep appreciation for the role language plays in shaping our identities and experiences.</p>   
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
             <p  className={styles.name}><font color="red">Vishwajeet Deshmukh</font></p>
             <h3 className={styles.adj}> Knowledgeable | Diligent | Curious </h3>
             <p className={styles.paragraph}>Vishwajeet Deshmukh is a lawyer turned historian with a passion for researching and writing about the history of minorities in South Asia. His extensive research has been widely published in reputable journals and his work has been funded by esteemed organizations like the 1947 Partition Archive and Tata Trusts Research Grant.</p>   
             </Col>
         </Row>
         <br></br>

         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Bhavna Pandya</font></p>
             <h3 className={styles.adj}>Compassionate | Innovative | Dedicated</h3>
             <p className={styles.paragraph}>Bhavna Pandya is a pioneering microbiologist and innovation catalyst who practices what she preaches by making small steps towards the betterment of science and society. Her expertise in synthetic biology has led to the discovery of a way to produce synthetic leather, reducing animal slaughter and offering sustainable alternatives. She is dedicated to democratizing access to the wonders of microbiology through India's first DIY biology lab and bio-incubator.</p>   
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
             <p  className={styles.name}><font color="red">Soubhik Das</font></p>
             <h3 className={styles.adj}>Visionary | Driven | Entrepreneurial</h3>
             <p className={styles.paragraph}>Soubhik Das is an innovative technologist and entrepreneur who is dedicated to improving the healthcare industry. As the founder of Manastik, he is developing a tele-neurology and tele-neurorehabilitation platform that caters to mental health. Soubhik's startup is focused on developing personalized AI-enabled physiotherapy and rehabilitation assistance and cloud storage of medical records. He has won several awards and grants for his innovative work in the field of medical technology.</p>   
             </Col>
             
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Rasik Pansare</font></p>
             <h3 className={styles.adj}>Empathetic | Charismatic | Resilient</h3>
             <p className={styles.paragraph}>Rasik Pansare, an engineer turned entrepreneur and co-founder of Get My Parking, has brought a classic business idea to life. He is a change-maker who believes in empowering his employees and creating a positive work culture. He has shared his journey as a successful entrepreneur in various Smart City and IOT summits.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img6} alt=""/>
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
export default OurSpeakers6