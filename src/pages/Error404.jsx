import  "../sass/error404.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="error-404">
            <h2>404</h2>
            <p>Oups! La page que <span>vous demandez n'existe pas.</span> </p>
            <Link to="/" className="return-link" >Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error404;