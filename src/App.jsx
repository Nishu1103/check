// App.js
import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import AboutUs from './components/AboutUs';
import Rooms from './components/Rooms';
import Attractions from './components/Attraction';
import Dining from './components/Dining';
import Footer from './components/Footer';
import Lfooter from './components/Lfooter';

const App = () => (

  <>
    <GlobalStyles />
    <Preloader />
    <Navbar />
    <HeroVideo />
    <main>
      <AboutUs />
      <Rooms />
      <Attractions />
      <Dining />
      <Footer />
      <Lfooter />
    </main>
  </>
);

export default App;
