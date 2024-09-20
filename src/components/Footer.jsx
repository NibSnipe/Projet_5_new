import logoBlanc from "../assets/images/logo_blanc.svg"
import "../sass/footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoBlanc} alt="logo kasa" className="footerLogo"/>
            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;