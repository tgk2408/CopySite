import "./ContactWidget.css";
import { FaChevronRight } from "react-icons/fa";

const ContactWidget = () => {
    return (
        <div className="contact-widget">
            <h1>Supercharge Your SEO Campaign Today!</h1>
            <h2>Get Free Consultation from our Experts today!</h2>
            <a href="." className="contact-us">
                Contact us <FaChevronRight className="contact-widget-icon"/>
            </a>
        </div>
     );
}
 
export default ContactWidget;