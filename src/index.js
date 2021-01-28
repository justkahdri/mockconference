import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import MainBanner from "./components/MainBanner";
import SpeakersContainer from "./components/SpeakersContainer";
import SpeakerCard from "./components/SpeakerCard";
import InfoBanner from "./components/InfoBanner";
import BecomeSpeaker from "./components/BecomeSpeaker";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import cvander from "./assets/speakers/cvander.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
