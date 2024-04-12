import React from 'react';
import SideBar from './Components/SideBar/Sidebar';
import MainContent from './Components/MainContent/MainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
