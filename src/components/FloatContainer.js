import Aos from "aos";
import "./FloatContainer.css"
import { FaSearch, FaChevronRight } from 'react-icons/fa';
import { useEffect } from "react";
import 'aos/dist/aos.css'

const FloatContainer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="float-container">
            <div className="float-card" data-aos="fade-up" data-aos-once="true">
                <FaSearch className="card-icon"></FaSearch>
                <div className="card-title">
                    this is title
                </div>
                <p className="card-content">
                When it crumbles
                We will stand tall
                Face it all together
                Let the sky fall
                When it crumbles
                We will stand tall
                Face it all together
                At Skyfall
                At Skyfall
                </p>
                <a href="." className="learn-more">
                    Learn More <FaChevronRight/>
                </a>
            </div>
            <div className="float-card" data-aos="fade-up" data-aos-once="true">
                <FaSearch className="card-icon"></FaSearch>
                <div className="card-title">
                </div>
                <p className="card-content">
                </p>
                <a href="." className="learn-more">
                    Learn More <FaChevronRight/>
                </a>
            </div>
            <div className="float-card" data-aos="fade-up" data-aos-once="true">
                <FaSearch className="card-icon"></FaSearch>
                <div className="card-title">
                </div>
                <p className="card-content">
                </p>
                <a href="." className="learn-more">
                    Learn More <FaChevronRight/>
                </a>
            </div>
            <div className="float-card" data-aos="fade-up" data-aos-once="true">
                <FaSearch className="card-icon"></FaSearch>
                <div className="card-title">
                </div>
                <p className="card-content">
                </p>
                <a href="." className="learn-more">
                    Learn More <FaChevronRight/>
                </a>
            </div>
            <div className="float-card" data-aos="fade-up" data-aos-once="true">
                <FaSearch className="card-icon"></FaSearch>
                <div className="card-title">
                </div>
                <p className="card-content">
                </p>
                <a href="." className="learn-more">
                    Learn More <FaChevronRight/>
                </a>
            </div>
            <div className="float-card"  data-aos="fade-up" data-aos-once="true">
                <FaSearch className="card-icon"></FaSearch>
                <div className="card-title">
                </div>
                <p className="card-content">
                </p>
                <a href="." className="learn-more">
                    Learn More <FaChevronRight/>
                </a>
            </div>
        </div>
    );
}
 
export default FloatContainer;