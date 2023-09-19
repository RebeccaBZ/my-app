import "./ContactUs.css"

function ContactUs(){
    return(
        <div className="form">
            <h1>For Any Inquiries, Kindly Leave Us A Message Below!</h1>
            <form>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input placeholder="Message Subject"/>
                <textarea placeholder="Inquiry" rows="8"></textarea>
                <button>Submit</button>


            </form>
        </div>
    )
}

export default ContactUs;