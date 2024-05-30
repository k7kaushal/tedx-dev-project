import React ,{useEffect} from "react";
import startImg from './nak.png'
import Aos from "aos";
import "aos/dist/aos.css"
import dmnd from './dmnd.png'
import hldrm from './haldrm.png'
import hcld from './hcld1.png'
import styles from  './nakshtrastyles.css'
import vruk from './vruk.png'
import vj from './vj.jpg'
import {GiRoundStar} from "react-icons/gi";
import an from './anagha.png'
import bh from './bhavna.png'
import sbk from './soubhik.png'
import rk from './rasik.png'
import vs from './vishwajeet.png'
import dv from './devangana.png'
import perf from './perf.png'
import { CardGroup } from "react-bootstrap";
import Card3 from './Card3.jsx'

 function Nakshatra() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60});
    }, []);
  return (
    <div className='nakshtra'style={{position:'relative',backgroundImage:'nkblue.png'}}>
        <div className="container-2 mt-4">
            <div>
            <div className="card bg-dark text-white">
            
            <img className="newcard" 
                    src={startImg} alt="..." />
            
               
                {/* <div className="card-img-overlay">
                 
                     {<h4 className="card-title welcome">Welcome to TEDxPICT</h4>
                    <h1 className="card-title welcome-text" >EXPLORE.</h1> }
                </div> */}

                
            </div>
            </div>
             {/* ----------------------------------- Nakshatra Description div --------------------------------*/}
            <div className='nakshdescrip'>
            <h2 className="head1"> <font color="#dfad70">A Celestial Symphony</font></h2>
            <p className="naksdescp">Nakshatras and our lives are not as contrasting as we assume them to be.
Just as the stars in a constellation are separate entities that come together to form a recognizable pattern, individuals in society come together to form a community. Each person has their own unique experiences, but when combined, they create a larger whole. Just as the stars in a constellation are linked by invisible lines, people are connected through shared experiences and relationships.

At TEDxPICT, this year’s theme “Nakshatra” explores the similarities between our lives and nakshatras.</p>
            </div>
            {/* -----------------------------------Speakers Div --------------------------------*/}
            <div className='speakersdiv'>
            <h2 className="head1"> <font color="#dfad70">Our Speakers</font></h2>
                <div className="row">
                    
                  
                    <div className="col-12 col-md-4">
                        <a href="https://instagram.com/bhavna.pandya999?igshid=YmMyMTA2M2Y=">
                        <Card3 img={bh}></Card3>
                        </a>
                        </div>
                        <div className="col-12 col-md-4">
                        <a href="https://instagram.com/discoverwithdevangana?igshid=YmMyMTA2M2Y=">
                        <Card3 img ={dv} />
                         </a>
                         </div>
                         <div className="col-12 col-md-4">
                         <a href="https://instagram.com/iamsoubhikdas?igshid=YmMyMTA2M2Y=">
                        < Card3 img={sbk}/>
                        </a>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                    <div className="col-12 col-md-4">
                        <a href="https://instagram.com/vishwajeetarnav?igshid=YmMyMTA2M2Y=">
                        <Card3 img ={vs} />
                        </a>
                        </div>
                        <div className="col-12 col-md-4">
                        <a href="https://instagram.com/rasikpansare?igshid=YmMyMTA2M2Y=">
                        <Card3 img ={rk} />
                        </a>
                        </div>
                        <div className="col-12 col-md-4">
                        <Card3 img ={an} />
                        </div>
                    
                    
                        
                   
                        
                        
                    
                </div>
                <div className="row" style={{padding:"2rem"}}>
                    <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{alignItems:"center",textAlign:'center'}}>
                        
                    </div>
                    <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{alignItems:"center",textAlign:'center'}}>
                        
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
                <div className="row">
                    <div className="col-lg-3 "></div>
                    <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{alignItems:"center",textAlign:'center',border:"2px solid #dfad"}}>
                    <h2 className="head1"> <font color="#dfad70"> Food Sponsor</font></h2>
                        <a href="http://www.haldiram.com/">
                        <img className="sponsimg" src={hldrm} alt=""/>
                        </a>
                        <p className="sponcont">What began as a small-town enterprise in Bikaner is today a global phenomenon. Haldiram's is a way of life for Indians. No matter where they reside their hearts will always dance to the tune of Haldiram sweets and snacks.</p>
                    </div>
                    <div className="col-lg-3 "></div>
                    </div>
                    <h2 className="head1"> <font color="#dfad70">Our Sponsors</font></h2>
            
            
            <br></br>
            <br></br>
            
                <div className="row">
                    <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{alignItems:"center",textAlign:'center'}}>
                        <a href="https://diamondbp.com/">
                        <img className="sponsimg" src={dmnd} alt=""/>
                        </a>
                        <p className="sponcont">Diamond, a B2B business with more than 30 models of conventional blood pressure instruments, mercury free bp instruments and stethoscopes, is the first business to get an ISI quality mark for Mercurial Sphygmomanometers and Aneroid Dial BP Apparatus!
                        Even after having more than 700 competent dealers spreadout across the country, Diamond is the only brand with full range in B.P instruments.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 " styles={{textAlign:"center",alignItems:"center"}}>
                        <a href="https://www.vilasjavdekar.com">
                        <img className="sponsimgl" src={vj} alt="ted"/>
                        </a>
                        <p className="sponcont">What essentially guides an organisation during its journey, scaling new heights- one mission after another, towards their vision with consistency, is its philosophyVilas Javdekar Developers is a well known real estate developer in India. It offers various types of residential and commercial projects..</p> 
                    </div>
                </div>
               
    
                <div className="row">
                    <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " style={{alignItems:"center",textAlign:'center'}}>
                        <a href=" https://vrukshavalli.co.in/">
                        <img className="sponsimg" src={vruk} alt=""/>
                        </a>
                        <p className="sponscont" style={{justifyContent:'space-evenly',textAlign:'justify'}}>Vrukshavalli brings to you a wide gamut of products and services to enhance and nurture a long-lasting romance with your green side.From plants, pots, and miniature toys to professional consultancy & plant maintenance tips- we have something for everyone. Come, live on the green side with Vrukshavalli.</p>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 ">
                        <a href=" https://www.humancloud.co.in">
                        <img className="sponsimgl" src={hcld} alt="ted"/>
                        </a>
                        <p className="sponcont">Humancloud is a new-age tech startup helping industries build the best scalable software products by providing cutting-edge technologies and end-to-end software development solutions. We understand that businesses don’t run on technology alone, that’s why we believe in a human-centered approach which allows us to develop fitting solutions for your challenges.</p> 
                    </div>
                </div>
               
                
                
               
                <div className="row">
                    <div data-aos="fade-right" style={{alignItems:"center",textAlign:'center'}}>
                        
                    <p></p>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Nakshatra