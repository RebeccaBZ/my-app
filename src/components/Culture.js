import CultureValues from "./CultureValues";
import "./CultureStyles.css";
import Cult1Img from '../assets/appreciation.png'
import Cult2Img from '../assets/trust.jpeg'
import Cult3Img from '../assets/transparency.jpeg'

const Culture = () =>{
    return(
        <div className="culture">
            <h1>Our Culture</h1>

        <CultureValues
        naming="APPRECIATION"
        desc="We reflect on our actions, respect each other. Clarity, feedback and celebrating each other's success are crucial for a positive working atmosphere. Every individual makes a difference."
        imga={Cult1Img}
        />

    <CultureValues
        naming="TRUST"
        desc="We trust and rely on each other. We are a team that sticks together and only grows together. This is essential if we are to act swiftly and achieve our goals which take us further."
        imga={Cult2Img}
        />

    <CultureValues
        naming="TRANSPARENCY"
        desc="We do not embellish, but point out contradictions constructively. We act with integrity and talk to each other. This is the only way to create trust and bring our visions onto the streets."
        imga={Cult3Img}
        />
         </div>

    )
}

export default Culture;