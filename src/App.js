import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import MyComponent from './components/MyComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <MyComponent />
        <Footer />
    </div>
  );
}

export default App;
