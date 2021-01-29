// DEPENDENCIES
import React from 'react';

// COMPONENTS
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import SpeakersContainer from "./components/SpeakersContainer";
import SpeakerCard from "./components/SpeakerCard";
import InfoBanner from "./components/InfoBanner";
import BecomeSpeaker from "./components/BecomeSpeaker";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

// CSS & ASSETS
import cvander from "./assets/speakers/cvander.jpeg";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <MainBanner />
            <SpeakersContainer>
                <SpeakerCard name="Leonidas Esteban" avatar={cvander}/>
                <SpeakerCard name="Freddy Vega" avatar={cvander}/>
                <SpeakerCard name="Sacha Lifszyc" avatar={cvander}/>
                <SpeakerCard name="Christian Van Der H." avatar={cvander}/>
            </SpeakersContainer>
            <InfoBanner />
            <BecomeSpeaker />
            <Footer />
            <Modal />
        </React.Fragment>
    );
}

export default App;