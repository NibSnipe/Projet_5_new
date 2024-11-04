import "../sass/banner.scss";

const Banner = ({ background, alt, titre, sstitre }) => {
  return (
    <div className="banner">
      <img src={background} alt={alt} className="banner-img" />
      <h1>
        {titre} <span> {sstitre} </span>{" "}
      </h1>
    </div>
  );
};

export default Banner;
