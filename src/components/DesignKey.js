import "./DesignKeyStyles.css";
//import bmwwallpaper from '../assets/bmwcar-wallpaper.jpg'

function DesignKey (props){
    return(
        <>
        <div className={props.cName}> 
            <img alt="DesignKeyImg" src={props.designkeyImg}/>

        <div className="designkey-text">

            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href= {props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
        </div>
    
        </>
    );
}

export default DesignKey;