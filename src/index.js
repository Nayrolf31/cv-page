import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Sidebar from './component/Sidebar/Sidebar'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import Competences from './component/Competences/Competences'
import Skills from './component/Skills/Skills'
import Experiences from './component/Experiences/Experiences'
import Formations from './component/Formations/Formations'
import Langues from './component/Langues/Langues'
import Qualités from './component/Qualités/Qualités'
// import Card from './component/Card/Card'
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       {/* <Sidebar /> */}
    <Navbar />
    <Header />
    <div className='Card_container'>
      <Competences />
      <Skills />
      <Experiences />
      <Formations />
      <Langues />
      <Qualités />
    </div>
  </React.StrictMode>
);
document.title = "CV Maugan"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
