import redStar from '../assets/images/star_active.svg';
import greyStar from "../assets/images/star_inactive.svg";
//import "./Rating.scss";

export default function Rating({ rating }) {
    const maxStars = 5;

    return (
        <div className="star-container">
            {Array.from({ length: maxStars }).map((_, i) => (
                <img
                key={i}
                src={i < rating ? redStar : greyStar}
                    alt={i < rating ? "Étoile active" : "Étoile inactive"}
                />
                ))}
        </div>
    );
    
}
