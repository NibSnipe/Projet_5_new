import { useParams } from 'react-router-dom';
import logPages from "../data/logements.json";


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
            <p>loo { logement.description }</p>
        </div>
    );
};

export default Logements;