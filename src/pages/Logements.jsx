import { useParams } from 'react-router-dom';
import logPages from "../data/logements.json";
import Carrousel from '../components/Carrousel';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import "../sass/logements.scss";



const logId = (id) => {
    return logPages.find((logement) => logement.id === id);
}

const Logements = () => {
    const { id } = useParams();
    const logement = logId(id);
    const picture = logement.pictures;

    return (
        <div>
            <p>looollo { id }</p>
            <div className="carrousel-container">
            <Carrousel images={logement.pictures} />
            </div>

            <div className="all-info-container">
                <div className="left-container">
                    <div className="title-location">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                <Tags tags={logement.tags}/>
                </div>
                <div className="right-container">
                    <div className="host-container">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt = {"photo de " + logement.host.name}></img>
                    </div>
                    <div className="rating-container">
                        <Rating rating = {logement.rating}/>
                    </div>
                </div>    
            </div>
            <div className="collapse-description-container">
            <Collapse title="Description">  { logement.description }  </Collapse>
            <Collapse title="Équipements">  { logement.equipments }  </Collapse>
            </div>
        </div>
    );
};

export default Logements;