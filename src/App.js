import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Service from './pages/services/Service';
import VideoSection from './components/vidoesection/VideoSection';
import Offer from './components/offer/Offer';
import ClientTestumonials from './components/clienttestimonials/ClientTestumonials';
import Categories from './components/categories/Categories';
import ProcessOverview from './components/processOverview/ProcessOverview';

function App() {
  return (
    <div className=" min-h-[calc(100vh-120px)] w-full">
      <div className=' sticky top-0 bg-white  z-50'> 
      <Header/>
        </div>

      <Home/>
      <About/>
      <Service/>
      <VideoSection/>
      <Offer/>
      <ClientTestumonials/>
      <Categories/>
      <ProcessOverview/>
    
    </div>
  );
}

export default App;
