import Navbar from "../components/Navbar";
import DesignKey from "../components/DesignKey";
import ContactImg from '../assets/contactus.jpeg';

import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
function Contact (){
    
    
    return(
        <>
        
        <DesignKey cName="designkey-contactus" 
        designkeyImg = {ContactImg}
        title="Contact Us"
        />
        <Navbar/>
        <ContactUs/>
        <Footer/>
        </>
    );
}

export default Contact;