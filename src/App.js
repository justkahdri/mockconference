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

    return (
        <React.Fragment>
            <Header fromParent={i18n.language.toUpperCase()} t={t} updateTranslation={lang => i18n.changeLanguage(lang)} />
            <MainBanner tlate={t}/>
            <SpeakersContainer tlate={t}>
                {speakers.map(item => (
                    <SpeakerCard name={item.name} key={item.name} badges={item.topics}
                                 description={item.description} avatar={item.image}/>
                ))}
            </SpeakersContainer>
            <InfoBanner t={t}/>
            <BecomeSpeaker tlate={t}/>
            <Footer t={t}/>
            <Modal t={t}/>
        </React.Fragment>
    );
}

export default App;