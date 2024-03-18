import "./About.css";
import Typewriter from "../Typewriter/Typewriter";
import html from "../../assets/html-5.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/javascript-js.svg";
import react from "../../assets/react-original-wordmark.svg";
import csharp from "../../assets/c-sharp-c.svg";
import dotnet from "../../assets/dotnet.svg";
import xamarin from "../../assets/xamarin.svg";
import sql from "../../assets/mysql-original-wordmark.svg";
import bootstrap from "../../assets/bootstrap.svg";
type props = {
  animate: boolean;
};

const About = ({ animate }: props) => {
  return (
    <>
      <section id="about" className="content about">
        <div className=" d-flex align-items-center flex-column text-center ">
          <h2 id="headline" className="poppins-thin-italic">
            <Typewriter text="Hi there, I am Lwando" delay={100} />
          </h2>
          <p
            id="intro"
            className={`${animate ? "fade-in" : ""} pt-4 poppins-thin-italic`}
          >
            I enjoy coding, especially using C# .NET and ReactJS. I've also
            worked with Xamarin to create an app that works on different devices
            as a final year team project. I love learning new things, and I'm
            always excited about working on cool projects.
          </p>
          <p className={`${animate && "fade-in"} p-0 poppins-thin-italic`}>
            <strong>Here are some of my skills:</strong>
          </p>
          <div id="skills" className={`${animate && "fade-in1"}  mt-2`}>
            <img src={html} alt="HTML" className="floating-image html" />
            <img src={css} alt="CSS" className="floating-image css" />
            <img src={js} alt="JavaScript" className="floating-image js" />
            <img src={react} alt="React" className="floating-image react" />
            <img src={csharp} alt="C#" className="floating-image csharp" />
            <img src={dotnet} alt=".NET" className="floating-image dotnet" />
            <img src={sql} alt=".NET" className="floating-image sql" />
            <img src={bootstrap} alt=".NET" className="floating-image boot" />

            <img
              src={xamarin}
              alt="Xamarin"
              className="floating-image xamarin"
            />
          </div>

          <p
            id="conclusion"
            className={`${animate && "fade-in2"} pt-5 mt-4 ps-md-5 fw-bold`}
          >
            I am passionate about coding and I'm ready to take on new challenges
            and create awesome stuff!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
