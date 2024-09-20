import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "../sass/card.scss";


const Card = ({ dataLogements }) => {
    return (
        dataLogements.map((logement) => (
            <Link to={`/Logement/${logement.id}`} className="card" key={logement.id} >
                <img src={logement.cover} alt={logement.title} />
                <div className="card__content">
                    <h3>{logement.title}</h3>
                </div>
            </Link>
        )
    ));
};

Card.propTypes = {
    dataLogements: PropTypes.array.isRequired
}

export default Card;