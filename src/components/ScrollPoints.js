import { useEffect } from "react";
import Aos from "aos";
import { FaRegCheckCircle } from 'react-icons/fa';
import './ScrollPoints.css';
import 'aos/dist/aos.css'

const ScrollPoints = ( props ) => {
    const points = props.points;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="points-container" data-aos="fade-right" data-aos-once="true">
            {[...points, "hello"].map((item) => {
                return (<p className="point" key={item}> <FaRegCheckCircle className="point-icon"/>{item} </p>);
            })}
        </div>
    );
}
 
export default ScrollPoints;