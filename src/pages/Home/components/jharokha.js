import React, { useEffect } from "react";
// import startImg from './nak.png'
import jhImg from './jharokhaMain.png';
import Aos from "aos";
import "aos/dist/aos.css";
import thrds from './threads.jpg';
import rjni from './rajani.jpg';
import amrco from './arma.png';
import hcld from './hcld1.png';
import styles from './jharokhastyles.css';
import vruk from './vruk.png';
import vj from './vj.jpg';
import ptl from './patel.png';
import { GiRoundStar } from "react-icons/gi";
import md from './ManishDeo.png';
import rm from './RohitMote.png';
import pa from './PrachiAgarkar.png';
import tc from './TapanChaudhari.png';
import pj from './PriyanshiJ.png';
import ag from './AdityaG.png';
import perf from './perf.png';
import { CardGroup } from "react-bootstrap";
import Card3 from './Card3.jsx';

function Jharokha()
{
    useEffect(() =>
    {
        Aos.init({ duration: 900, offset: 60 });
    }, []);
    return (
        <div className='nakshtra' style={{ position: 'relative', backgroundImage: jhImg }}>
            <div className="container-2 mt-4">
                <div>
                    <div className="card bg-dark text-white" style={{ border: "2px solid #94692C" }}>

                        <img className="newcard"
                            src={jhImg} alt="..." />


                        {/* <div className="card-img-overlay">
                 
                     {<h4 className="card-title welcome">Welcome to TEDxPICT</h4>
                    <h1 className="card-title welcome-text" >EXPLORE.</h1> }
                </div> */}


                    </div>
                </div>
                {/* ----------------------------------- Jharokha Description div --------------------------------*/}
                <div className='nakshdescrip'>
                    <h2 className="head1" style={{ fontFamily: "Maharlika", color: "black", fontWeight: 500 }}> Jharokha of Endless Possibilities</h2>
                    <p className="naksdescp" style={{ color: "#000000", fontFamily: "Maharlika" }}>"Jharokha," is a Hindi term for an enclosed balcony or window in traditional Indian architecture  but in a broader and metaphorical sense, it is a symbol of a unique perspective or viewpoint on life. Like a jharokha provides a unique vantage point to observe the world, it embodies an individual's exclusive outlook on various aspects of life. It suggests the opportunity to view life from different angles, to appreciate the multitude of narratives unfolding around us. It signifies the ability to embrace a variety of perspectives, acknowledging the richness and diversity that life has to offer.

                        At TEDxPICT, "Jharokha" encapsulates diverse ideas and stories, encouraging introspection and pushing us to see beyond the ordinary. Join us as we peer through this window of endless possibilities, where every story is a mosaic ready to be crafted. Jharokhas, like our multifaceted existence, mirror the different stages we navigate. Seize the opportunity to gather the world's light and shape your narrative. TEDxPICT: Jharokha invites you to enter a world where every window holds a story, and each story unfolds a new chapter.Your window to endless possibilities beckons – become part of this collective exploration!

                    </p>
                </div>
                {/* -----------------------------------Speakers Div --------------------------------*/}
                <div className='speakersdiv'>
                    <h2 className="head1" style={{
                        fontFamily:
                            "Maharlika", color: 'black'
                    }}> Our Speakers</h2>
                    <div className="row">


                        <div className="col-12 col-md-4">
                            <a href="https://www.instagram.com/rohit.mote01?igsh=N3k4ZXNuYjRzNTU1">
                                <Card3 img={rm}></Card3>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="https://www.instagram.com/lets_eat_with_prachi?igsh=MWk0OXpqZW91aDNleQ==">
                                <Card3 img={pa} />
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="https://www.instagram.com/ahelmetfullofdreams?igsh=MWlicmg5Z3NweWs1bQ==">
                                < Card3 img={tc} />
                            </a>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        {/* <div className="col-12 col-md-4">
                            <a href="https://www.instagram.com/deomanish?igsh=MXA4Z2J2aGF1NTBnZQ==">
                                <Card3 img={md} />
                            </a>
                        </div> */}
                        <div className="col-12 col-md-4">
                            <a href="https://www.instagram.com/theroundwoman?igsh=OWkwdnRnY3p1bzdu">
                                <Card3 img={pj} />
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="https://www.instagram.com/adityaganeshwade?igsh=MWN5eWRtZjNxem5tMw==" >
                                <Card3 img={ag} />
                            </a>
                        </div>







                    </div>
                    <div className="row" style={{ padding: "2rem" }}>
                        <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{ alignItems: "center", textAlign: 'center' }}>

                        </div>
                        <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{ alignItems: "center", textAlign: 'center' }}>

                        </div>
                    </div>
                    {/* <div className="row" style={{padding:"2rem"}}>
                        <a href="https://diamondbp.com/">
                        <img className="speakimg" src={perf} alt=""/>
                        </a>
                    
                </div> */}

                </div>



                {/* -----------------------------------Sponsors Div --------------------------------*/}


                <div className='sponsordiv'>
                    <div>
                        <div>



                        </div>
                        <h2 className="head1" style={{ fontFamily: "Maharlika", color: "black" }}> Our Sponsors</h2>

                        <div className="row">
                            <div className="col-lg-3 "></div>
                            <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{ alignItems: "center", textAlign: 'center', border: "2px solid #94692C" }}>
                                <h2 className="head1" style={{ fontFamily: "Maharlika", color: 'black' }}>  Title Sponsor</h2>
                                <a href="https://amarbuilders.com/">
                                    <img className="sponsimg" src={amrco} alt="" />
                                </a>
                                <p className="sponcont" style={{
                                    color: "black",
                                    fontWeight: 500

                                }}>Revealing our title sponsor, Arma Landmarks, where the aspiration for an ideal living space transforms into reality. Delighted to welcome Arma Landmarks to TEDxPICT Jharokha, as they align with our vision of innovation and inspiration.</p>
                            </div>
                            <div className="col-lg-3 "></div>
                        </div>


                        <br></br>
                        <br></br>

                        {/* <div className="row">
                            <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{ alignItems: "center", textAlign: 'center', color: "black" }}>
                                <a href="https://diamondbp.com/">
                                    <img className="sponsimg" src={thrds} alt="" />
                                </a>
                                <p className="sponcont" style={{ color: "black" }}>Sanskriti Macrame isn't just a brand; it's a celebration of traditional artistry blended with contemporary design. Specializing in exquisite macrame creations, Sanskriti Macrame is dedicated to reviving and promoting the ancient art of knotting, transforming simple threads into intricate decorative items. Their commitment to sustainability, creativity, and the empowerment of local artisans sets them apart. As a partner of TEDx PICT Jharokha, Sanskriti Macrame brings a touch of artisanal elegance and a message of sustainable, handcrafted beauty to our event.
                                </p>
                            </div>
                            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 " styles={{ textAlign: "center", alignItems: "center", color: "black" }}>
                                <a href="https://www.vilasjavdekar.com">
                                    <img className="sponsimgl" src={rjni} alt="ted" />
                                </a>
                                <p className="sponcont" style={{ color: "black" }}>Discover the Window to Imagination with Rajini Notebooks at TEDxPICT's Jharokha! Join us in a journey of exploration and inspiration, where every page of Rajini Notebooks becomes a canvas for the ideas that shape our world. Embrace the spirit of innovation and creativity at TEDxPICT's Jharokha, and let your thoughts flow freely onto the pages of Rajini Notebooks – Your Trusted Partner in the Adventure of Knowledge and Discovery!.</p>
                            </div>
                        </div>


                        <div className="row">
                            <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{ alignItems: "center", textAlign: 'center' }}>
                                <a href=" https://vrukshavalli.co.in/">
                                    <img className="sponsimg" src={ptl} alt="" />
                                </a>
                                <p className="sponscont" style={{ justifyContent: 'space-evenly', textAlign: 'justify', color: "black" }}>Presenting the Official Refreshments Sponsors of TedXPICT- Jharokha- Patel Clinic.
                                    Patel Clinic, goes beyond being just a Diabetes Care and Thyroid and Lipid Wellness Centre;  it is dedicated to providing exceptional patient care. Patel Clinic values innovation, ideas, well-being and holistic health and is a sanctuary committed to patient well being.
                                </p>
                            </div>
                            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 ">
                                <a href=" https://www.humancloud.co.in">
                                    <img className="sponsimgl" src={hcld} alt="ted" />
                                </a>
                                <p className="sponcont" style={{ color: "black" }}>Humancloud is a new-age tech startup helping industries build the best scalable software products by providing cutting-edge technologies and end-to-end software development solutions. We understand that businesses don’t run on technology alone, that’s why we believe in a human-centered approach which allows us to develop fitting solutions for your challenges.</p>
                            </div>
                        </div> */}




                        <div className="row">
                            <div data-aos="fade-right" style={{ alignItems: "center", textAlign: 'center' }}>

                                <p></p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Jharokha;;