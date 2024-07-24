import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CardService from "./components/CardService";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="container-none">
        <Navbar />
      </div>

      <div className="container mb-[100px]">
        <Home />
      </div>

      <div className="container mb-[100px]">
        <CardService/>
      </div>

      <div className="container mb-[100px]">
        <Experience/>
      </div>

      <div className="container mb-[100px]">
        <Contact/>
      </div>

      <div className="container-none">
        <Footer/>
      </div>

      

    </>
  );
}

export default App;
