import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import "./AboutUs.css";
import Lic from "./components/ridhima.jpg";
import CoLic from "./components/varad.PNG";
import Part1 from "./components/shat.jpg";
import Part2 from "./components/bismah.jpg";
import Ops1 from "./components/Mugdha.jpg";
import Ops2 from "./components/Ops2.jpg";
import Con2 from "./components/anushka.jpg";
import Con1 from "./components/sneha.jpg";
import Cur2 from "./components/vibhav.jpg";
import Cur1 from "./components/piyush.jpg";
import Des1 from "./components/riya.jpeg";
import Des2 from "./components/belgamwar.jpg";
import Des3 from "./components/mustafa.jpg";
import Brand2 from "./components/arohi.jpeg";
import Brand1 from "./components/Eshwari.jpg";


import kev from "./components/Kev.jpg";
import san from "./components/San.jpg";
import dev from "./components/dev.jpg";
import rid from "./components/rid.jpg";
import sac from "./components/sac.jpg";
import him from "./components/him.jpg";
import ash from "./components/ash.jpg";
import may from "./components/may.jpg";
import ved from "./components/ved.jpg";
import mih from "./components/mih.jpg";
import shubh from "./components/shubh.jpg";
import san2 from "./components/san2.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Card from "./Card.jsx";
import Card2 from "./Cards2.jsx";
import Card3 from "./Card3.jsx";
import { Container, Col, Row, Button, CardGroup } from "react-bootstrap";
import styles from "./ourteam.module.css";

import TabNav from "./OurTeamTabNav";
import Tab from "./OurTeamTabs";

// function OurTeam() {
//   useEffect(() => {
//         Aos.init({duration:1000});
//     }, []);
//     return (
//         <>
//         <div  className={styles.contak}>

//               <h2 data-aos="fade-up" className={styles.h22}>Meet the&nbsp;<font color="red">Team</font></h2>
//             <div className="row">
//               <CardGroup data-aos="flip-right" className={styles.heads}>
//               <div className="col-lg-4 col-0"></div>
//                 <div className="col-lg-2 col-4"><Card img={Lic}  name="Kaushik Shroff" post="Licensee"  insta="https://www.instagram.com/kns3092/" linkd="https://www.linkedin.com/in/kaushik-shroff-51a09a21b"/></div>
//                 <div className="col-lg-2 col-4"><Card img={CoLic}  name="Yash Desai" post="Co-Licensee" insta="https://www.instagram.com/yash.d3/" linkd="https://www.linkedin.com/in/yash-desai3-i46879/" /></div>
//                 <div className="col-lg-4 col-0"></div>

//                 </CardGroup></div>
//                 <CardGroup data-aos="flip-left" className={styles.heads}>
//                 <div className="col-lg-1  col-0"></div>
//                 <div className="col-lg-2 col-5 " ><Card img={Con1} name="Soham Ravindran" post="Content Head" insta="https://www.instagram.com/soham_ravindran/" linkd="https://www.linkedin.com/in/soham-ravindran-177689193/"/></div>
//                 <div className="col-lg-2 col-7"><Card img={Con2} name="Smita Naik" post="Content Head" insta="https://www.instagram.com/smitaa._/" linkd="https://www.linkedin.com/in/smita-naik-3ba133206/"/></div>
//                 <div className="col-lg-2 col-5"><Card img={Part2} name="Parag Kulkarni" post="Partnerships & Technical Head" insta="https://www.instagram.com/parag_k_127/" linkd="https://www.linkedin.com/in/parag-kulkarni-9547341b9/"/></div>
//                 <div className="col-lg-2 col-7"><Card img={Part1} name="Aarushi Wagh" post="Partnerships Head" insta="https://www.instagram.com/aarrushhiii/" linkd="https://www.linkedin.com/in/aarushi-wagh-aa145b213/"/></div>

//                 <div className="col-lg-2 col-5"><Card img={Ops1} name="Mitul Shah" post="Operations Head" insta="https://www.instagram.com/kirtii.i/" linkd="https://www.linkedin.com/in/kirti-palve"/></div>
//                 <div className="col-lg-1 col-0"></div>
//                 <div className="col-lg-1 col-0"></div>
//                 <div className="col-lg-2 col-7"><Card img={Ops2} name="Anushka Mane" post="Operations Head" insta="https://www.instagram.com/anushkamane_/" linkd="https://www.linkedin.com/in/anushka-mane-20837321b/"/></div>
//                 <div className="col-lg-2 col -5"><Card img={Cur2} name="Gargi Mhaskar" post="Curations Head" insta="https://www.instagram.com/gargimhaskar/" linkd="https://www.linkedin.com/in/gargi-mhaskar-097469208" /></div>
//                 <div className="col-lg-2 col-7"><Card img={Cur1} name="Manas Jadhav" post="Curations Head" insta="https://www.instagram.com/manas.jj/" linkd="https://www.linkedin.com/in/manas-jadhav-357607206/"/></div>
//                 <div className="col-lg-2 col-5"><Card img={Brand1}name="Nidhi Bivalkar" post="Branding Head" insta="https://www.instagram.com/nidhibivalkar/" linkd="https://www.linkedin.com/in/nidhi-bivalkar-8281a2215/" /></div>
//                 <div className="col-lg-2 col-7"><Card img={Brand2} name="Ameya Dhake" post="Branding Head" insta="https://www.instagram.com/___ameya___/" linkd="https://www.linkedin.com/in/ameya-dhake-a69b2b218" /></div>
//                 <div className="col-lg-1 col-0"></div>
//                 <div className="col-lg-3 col-0"></div>
//                <div className="col-lg-2 col-5"><Card img={Des3} name="Kaushal Kulkarni" post="Design & Technical Head" insta="https://www.instagram.com/k7_kaushal_/" linkd="https://www.linkedin.com/in/kaushal-kulkarni-461a03212" /></div>
//                <div className="col-lg-2 col-7"><Card img={Des1} name="Arsh Patne" post="Design Head" insta="https://www.instagram.com/brainfry.png/" linkd="https://www.linkedin.com/in/arsh-patne-2148b6205/" /></div>
//                <div className="col-lg-2 col-5"><Card img={Des2} name="Giaa Poddar" post="Design Head" insta="https://www.instagram.com/giaa_poddar_/" linkd="https://www.linkedin.com/in/giaa-poddar-116b48207" /></div>
//                <div className="col-lg-3 col-0"></div>
//                 </CardGroup>

//           </div>
//       </>
//     )
// }
class OurTeam extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      selected: "Meet our team",
    };
  }
  setSelected = (tab) =>
  {
    this.setState({ selected: tab });
  };
  render()
  {
    return (
      <div className="mt-5">
        <h2 data-aos="fade-up" className={styles.h21}>
          Our&nbsp;<font style={{ color: "red", fontWeight: "bold" }} >Team</font>&nbsp;
        </h2>

        {/* <TabNav className="nav-1" tabs={['Meet our team','Alumni wall' ]} selected={this.state.selected} setSelected={this.setSelected}> */}
        {/* <Tab isSelected={this.state.selected === 'Meet our team'}> */}
        <div className="row">
          <CardGroup data-aos="flip-right" className={styles.heads}>
            <div className="col-lg-4 col-0"></div>
            <div className="col-lg-2 col-4">
              <Card
                img={Lic}
                name="Ridhima Sinare"
                post="Licensee"
                insta="https://www.instagram.com/wridhimasinare/"
                linkd="https://www.linkedin.com/in/ridhima-sinare-653235221/"
              />
            </div>
            <div className="col-lg-2 col-4">
              <Card
                img={CoLic}
                name="Varad Gadaokar"
                post="Co-Licensee"
                insta="https://www.instagram.com/varad_gadaokar/"
                linkd="https://www.linkedin.com/in/varad-gadaokar-7164a522a/"
              />
            </div>
            <div className="col-lg-4 col-0"></div>
          </CardGroup>
        </div>
        <CardGroup data-aos="flip-left" className={styles.heads}>
          <div className="col-lg-2  col-0"></div>
          <div className="col-lg-2 col-5 ">
            <Card
              img={Con1}
              name="Sneha Basu"
              post="Content Head"
              insta="https://www.instagram.com/_.snehaa._._._/"
              linkd="https://www.linkedin.com/in/sneha-basu-228a121b5/"
            />
          </div>

          <div className="col-lg-2 col-5">
            <Card
              img={Part2}
              name="Bismah Shaikh"
              post="Partnerships Head"
              insta="https://www.instagram.com/bismah_.shaikh/"
              linkd="https://www.linkedin.com/in/bismah-shaikh-2aa586275/"
            />
          </div>
          <div className="col-lg-2 col-7">
            <Card
              img={Part1}
              name="Shatakshi Chaudhari"
              post="Partnerships Head"
              linkd="https://www.linkedin.com/in/shatakshi-chaudhari-707b1b236/"
              insta="https://instagram.com/shatakshi.____?igshid=MzRlODBiNWFlZA=="
            />
          </div>

          <div className="col-lg-2 col-5">
            <Card
              img={Ops1}
              name="Mugdha Kulkarni"
              post="Operations Head"
              insta="https://www.instagram.com/_potaetopotato/"
              linkd="https://www.linkedin.com/in/mugdha-kulkarni-243752229/"
            />
          </div>
          <div className="col-lg-1 col-0"></div>
          <div className="col-lg-1 col-0"></div>
          <div className="col-lg-2 col-7">
            
          </div>
          <div className="col-lg-2 col-7">
            <Card
              img={Cur2}
              name="Vibhav Sahasrabudhe"
              post="Curations Head"
              insta="https://www.instagram.com/vibbhaaav._/"
              linkd="https://www.linkedin.com/in/vibhav-sahasrabudhe-09348222a/"
            />
          </div>
          <div className="col-lg-2 col-7">
            <Card
              img={Cur1}
              name="Piyush More"
              post="Curations Head"
              insta="https://www.instagram.com/_piyush_more/"
              linkd="https://www.linkedin.com/in/piyush-more-381878220/"
            />
          </div>
          <div className="col-lg-2 col-5">
            <Card
              img={Brand1}
              name="Eshwari Khurd"
              post="Branding Head"
              insta="https://www.instagram.com/esh.worry_/"
              linkd="https://www.linkedin.com/in/eshwari-khurd-a105121b3/"
            />
          </div>
          <div className="col-lg-2 col-7">
            <Card
              img={Brand2}
              name="Arohi Karhade"
              post="Branding Head"
              insta="https://www.instagram.com/arohikarhade/"
              linkd="https://www.linkedin.com/in/arohi-karhade-220589272/"
            />
          </div>
          <div className="col-lg-1 col-0"></div>
          <div className="col-lg-3 col-0"></div>
          <div className="col-lg-2 col-5">
            <Card
              img={Des3}
              name="Mustafa Trunkwala"
              post="Design & Technical Head"
              insta="https://www.instagram.com/nothim_7856/"
              linkd="https://www.linkedin.com/in/mustafa-trunkwala-49249a22a/"
            />
          </div>
          <div className="col-lg-2 col-7">
            <Card
              img={Des1}
              name="Riya Wani"
              post="Design Head"
              insta="https://www.instagram.com/riyawani26/"
              linkd="https://www.linkedin.com/in/riya-wani-114672229/"
            />
          </div>
          <div className="col-lg-2 col-5">
            <Card
              img={Des2}
              name="Shlok Belgamwar"
              post="Design Head"
              insta="https://www.instagram.com/shlokbelgamwar/"
              linkd="https://www.linkedin.com/in/shlok-belgamwar/"
            />
          </div>
          <div className="col-lg-3 col-0"></div>
        </CardGroup>

      </div>
    );
  }
}

export default OurTeam;
