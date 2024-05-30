import "bootstrap/dist/css/bootstrap.min.css";
import './Speakers.css'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Rectangle33 from './Rectangle33.png'
import Renuka from '../components/renuka.png'
import Vvk from './Vivek.jpg'
import Rz from './Ritviz.jpeg'
import Dev from './devangana.jpg'

const Speakers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="space-betn">
            <div className="myText-cards title-horizontal-line" style={{ textAlign: "center" }} ><font style={{fontWeight:'bold' ,color: 'red' }}>Previous Speakers</font></div><br></br>
            <div className="container mt-4">
                <div className="grid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 speaker-box">
                            <div data-aos="slide-right">
                                <img className="speaker-img-custom" src={Rz} alt="" /><h3></h3>
                                <div className="img-badge-text"><div className="img-badge-text-1">Ritviz</div></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 speaker-box">
                            <div data-aos="fade">
                                <img className="speaker-img-custom" src={Renuka} alt="" /><h3></h3>
                                <div className="img-badge-text"><div className="img-badge-text-1">Renuka Kripalani</div></div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 speaker-box">
                            <div data-aos="slide-left">
                                <img className="speaker-img-custom" src={Dev} alt="" /><h3></h3>
                                <div className="img-badge-text"><div className="img-badge-text-1">Devangana Lashkary</div></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers
