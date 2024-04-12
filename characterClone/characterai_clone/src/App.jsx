import React from 'react';
import SideBar from './Components/SideBar/Sidebar';
import MainContent from './Components/MainContent/MainContent';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ContentSlider from './Components/ContentSlider/ContentSlider';



function App() {
  return (
    <div className="app">
      <SideBar />

      <MainContent />
    </div>
  );
}

export default App;
