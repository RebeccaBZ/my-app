import "./FooterStyles.css"

const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
            <p>Sheer Driving Pleasure</p>
            </div>

            <div className="bottom">
                <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                </div>
                <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                </div>

                <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                </div>

                </div>
        </div>
    )

}

export default Footer