import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import about from "../data/about.json";
import "../sass/about.scss";
import aboutbackground from "../assets/images/about_headline_background.svg";

const About = () => {
  return (
    <div>
      <Banner background={aboutbackground} alt="image montagne" />

      <section className="aboutMenu">
        <div className="aboutText">
          {about.map((item, index) => (
            <Collapse key={index} title={item.title}>
              <p>{item.content}</p>
            </Collapse>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
