import FixedHeader from "../components/FixedHeader";
import StickyHeader from "../components/StickyHeader";
import ScrollPoints from "../components/ScrollPoints";
import Slideshow from "../components/Slideshow";
import FloatContainer from "../components/FloatContainer";
import ContactWidget from "../components/ContactWidget";

function Home() {
    const points = ["Hello", "It's me", "I've been wondering", "if after all these years", "you'd like to meet"];
    return (
        <div style={{ height: 5000 }}>
            <FixedHeader />
            <StickyHeader/>
            <FloatContainer/>
            <ScrollPoints points={points}></ScrollPoints>
            <ContactWidget/>
            <Slideshow />
        </div>
    );
}

export default Home;
