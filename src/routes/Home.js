import Navbar from "../components/Navbar";
import DesignKey from "../components/DesignKey"
import HomeImgBMWWallPaper from '../assets/bmwcar-wallpaper.jpg'
import Culture from "../components/Culture"
import Footer from "../components/Footer"


function Home (){
    return(
        <>
        
        <DesignKey cName="designkey" 
        designkeyImg = {HomeImgBMWWallPaper}
        title="Sheer Driving Pleasure"
        text= "Performance Control & Digitalization Innovation Think Tank"
        //url= "/"
        //btnClass="show"
        //buttonText="Explore"
        />
        <Navbar/>

        <Culture/>
        <Footer/>
        </>
    );
}

export default Home;