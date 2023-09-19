import Navbar from "../components/Navbar";
import DesignKey from "../components/DesignKey";
import ServicesImg from '../assets/digitaization.jpg';
import Footer from "../components/Footer";
import ServicesProvided from "../components/ServicesProvided";

function Services (){
    return(
        <>
        
        <DesignKey cName="designkey-services" 
        designkeyImg = {ServicesImg}
        title="Our Services"
        />
        <Navbar/>
        <ServicesProvided/>
        <Footer/>
        </>
    );
}

export default Services;