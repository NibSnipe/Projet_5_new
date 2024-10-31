import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import about from  "../data/about.json";
import "../sass/about.scss";
import aboutbackground from "../assets/images/about_headline_background.svg";


const About = () => {
    return (
        <div>
            <Banner background ={ aboutbackground } alt="image montagne"  />

                  <div className="aboutMenu">
                  {about.map((item, index) => (
                    <Collapse key={index} title={item.title}>
                      <p>{item.content}</p>
                    </Collapse>
                  ))}
                </div>
        </div>
    );
};

export default About;