import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Hero from './components/LandingPage/Hero';
import Our from './components/LandingPage/Our';
import Nav from './components/LandingPage/Nav';
import Why from './components/LandingPage/Why';
import Testimonial from './components/LandingPage/Testimonial';
import Getting from './components/LandingPage/Getting';
import FAQ from './components/LandingPage/FAQ';
import Footer from './components/LandingPage/Footer';
import SearchBar from './components/Search/SearchBar';
import CardCars from './components/Search/CardCars';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Hero />
      <Routes>
        <Route path="/landing" element={
          <>
            <SearchBar />
            <CardCars />
          </>
        }/>
        <Route path="/" element={
          <>
            <Our />
            <Why />
            <Testimonial />
            <Getting />
            <FAQ />
          </>
        }/>
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
