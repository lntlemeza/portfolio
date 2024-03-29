import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import About from "./components/About/About";
import HireMe from "./components/HireMe/HireMe";
import MainAnimation from "./components/MainAnimations/MainAnimation";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import backdrop from "./assets/backdrop.jpeg";

import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  //*will be use along with the use effect to ensure the animation runs once
  const [animate, setAnimate] = useState(true);

  /*Handle image backgrounds*/
  const location = useLocation();
  useEffect(() => {
    let pathname = location.pathname;

    if (pathname !== "/project/details") {
      document.body.style.backgroundImage = `url(${backdrop})`;
    }
  }, [location]);

  /*handle animations, for the about so that it only animates once*/
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, 11000);

    // Cleanup function to clear the timeout when component unmounts or re-renders
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <NavigationBar />
      <MainAnimation />
      <Routes>
        <Route path="/" element={<About animate={animate} />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<HireMe />}></Route>
        <Route path="/project/details" element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
