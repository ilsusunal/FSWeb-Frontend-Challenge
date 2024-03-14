import './App.css';

import Hero from "./components/Hero";
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';


import greyDonut from "./assets/shapes/greydonut.png"
import pinkRec from "./assets/shapes/pinkrec.png"
import greyRec from "./assets/shapes/greyrec.png"
import pinkDonut from "./assets/shapes/pinkdonut.png"
import greyCircle from "./assets/shapes/greycircle.png"
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
        <main>
          <section  className="dark:bg-koyukahve dark:text-white bg-zinc-100 relative">
            <img className="absolute -left-4 md:left-1/4 z-0 " src={greyCircle} alt="Ornament" />
            <img className="absolute right-0 top-2/4 md:top-3/4" src={pinkRec} alt="Ornament" />
            <img className="absolute left-4 md:left-2/3 -bottom-16" src={greyDonut} alt="Ornament" />
            <Header />
            <Hero/>
          </section>
          <div className="relative dark:bg-acikkahve dark:text-white">
            <img className="absolute top-full md:top-3/4" src={greyRec} alt="Ornament" />
            <img className="absolute right-0 -bottom-44 md:-bottom-24" src={pinkDonut} alt="Ornament" />
            <Skills/>
            <ScrollToTop />
          </div>
          <div  className="dark:bg-koyukahve dark:text-white bg-zinc-100 ">
            <Profile/>
          </div>
          <div  className="relative dark:bg-acikkahve dark:text-white">
            <Projects/>
          </div>
          <footer  className="relative dark:bg-acikkahve dark:text-white">
            <Footer/>
          </footer>
        </main>
  )
}

export default App
