import { useParams } from 'react-router-dom';
import logPages from "../data/logements.json";
import Collapse from '../components/Collapse';
import starActive from '../assets/images/star_active.svg';
import starInactive from "../assets/images/star_inactive.svg";


const logId = (id) => {
    return logPages.find((logement) => logement.id === id);
}

const Logements = () => {
    const { id } = useParams();
    const logement = logId(id);
    const picture = logement.pictures;

    return (
        <div>
            { picture.map((img) => <img src={ img } alt={""} key={ img } />) }
            <p>looollo { id }</p>
            <p> { logement.description }</p>


            <div className="logementRating">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < logement.rating ? starActive : starInactive}
                  alt={
                    index < logement.rating
                      ? "Étoile active"
                      : "Étoile inactive"
                  }
                  className="star"
                  />
                  ))}
            </div>

            <Collapse title="Description">  { logement.description }  </Collapse>
            <Collapse title="Équipements">  { logement.equipments }  </Collapse>


        </div>
    );
};

export default Logements;