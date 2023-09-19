import Navbar from "../components/Navbar";
import DesignKey from "../components/DesignKey";
import AboutUsImgTeam from '../assets/team.jpeg';
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
        <Navbar/>
        <DesignKey cName="designkey-about" 
        designkeyImg = {AboutUsImgTeam}
        title="About Us"
        />
        <AboutUs/>
        <Footer/>
        
        </>
    );
}

export default About;