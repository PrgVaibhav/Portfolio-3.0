import { BsArrowUpCircleFill } from "react-icons/bs";
import "../styles/Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Made with <span className="emoji">❤</span> by Vaibhav
        </p>
        <a className="go-up" href="#main">
          <BsArrowUpCircleFill />
        </a>
      </div>
    </footer>
  );
};
