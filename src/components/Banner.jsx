import background from "../assets/images/home_title_background.svg";
import "../sass/banner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <img src= {background} alt="image bord de mer" className="banner-img" />
            <h1>Chez vous, <span> partout et ailleurs</span> </h1>
        </div>
    );
};

export default Banner;