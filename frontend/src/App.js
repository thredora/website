import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App relative">
        <Navigation />
        <HeroSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
