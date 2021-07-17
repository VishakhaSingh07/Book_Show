import react from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroSlider from "../components/HeroCarousal/HeroCarousal.component";


const DefaultLayout = (props) => {
    return (
        <>
            <div>
                <Navbar />
                <HeroSlider />
                {props.children}
            </div>
        </>
    );
};

export default DefaultLayout;