import hello1 from "./images/adele.jpg";
import hello2 from "./images/adele2.jpg";
import logo from "./images/techbud_logo.png";
import "./Slideshow.css"
import { Carousel } from "react-bootstrap";



const Slideshow = () => {
      return (
        <div className="slideshow-container">
        <Carousel className="slideshow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hello1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
      );
}
 
export default Slideshow;
