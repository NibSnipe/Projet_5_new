import Banner from "../components/Banner";
import Card from "../components/Card";
import ibackground from "../assets/images/home_title_background.svg";
import dataLogements from "../data/logements.json";
import "../sass/home.scss";

const Home = () => {
  return (
    <div>
      <Banner
        background={ibackground}
        alt="image bord de mer"
        titre="Chez vous,"
        sstitre="partout et ailleurs"
      />
      <div className="gallery">
        <Card dataLogements={dataLogements} />
      </div>
    </div>
  );
};

export default Home;
