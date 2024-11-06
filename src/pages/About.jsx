import AboutBannar from "../components/AboutBannar";
import BannaBotto from "../components/BannaBotto";
import LatestProducts from "../components/LatestProducts";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
             <AboutBannar></AboutBannar>
             <Mission></Mission>
             <LatestProducts></LatestProducts>
             <BannaBotto></BannaBotto>
            
        </div>
    );
};

export default About;