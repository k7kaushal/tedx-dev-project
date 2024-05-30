import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './components/Cards';
import Startpg from './components/Startpg';
import Statistics from './components/Statistics';
import Speakers from './components/Speakers';
import OurBlog from './components/OurBlog';
import Testimonials from './components/Testimonials';
// import Nakshatra from './components/nakshatra';
// import Jharokha from './components/jharokha';




function Home()
{
    return (
        <div className='mainpg'>
            {/* <Nakshatra /> */}
            {/* <Jharokha /> */}
            <Startpg />
            <Cards />
            <Statistics /> 
            <Speakers />
            <OurBlog />
            <Testimonials />
        </div>
    );
}

export default Home;
