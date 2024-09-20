import Banner from "../components/Banner";
import Card from "../components/Card";
import dataLogements from "../data/logements.json";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="gallery">
                <Card dataLogements={dataLogements} />
            </div>
        </div>
    );
};

export default Home;