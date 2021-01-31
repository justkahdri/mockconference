// DEPENDENCIES
import React from 'react';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import SpeakersContainer from "./components/SpeakersContainer";
import SpeakerCard from "./components/SpeakerCard";
import InfoBanner from "./components/InfoBanner";
import BecomeSpeaker from "./components/BecomeSpeaker";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

// ASSETS
import { speakers } from "./components/speakers.js";

const App = () => {
    const { t, i18n } = useTranslation();

    const handleLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <React.Fragment>
            <Header availableLanguages={{en: 'English', es: 'Español'}} updateTranslation={handleLanguage} />
            <MainBanner />
            <SpeakersContainer>
                {speakers.map(item => (
                    <SpeakerCard name={item.name} key={item.name} badges={item.topics}
                                 description={item.description} avatar={item.image}/>
                ))}
            </SpeakersContainer>
            <InfoBanner translation={t}/>
            <BecomeSpeaker />
            <Footer />
            <Modal />
        </React.Fragment>
    );
}

export default App;