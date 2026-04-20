import './style.scss';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__bottom">
        © {new Date().getFullYear()} MODULE TRẢI NGHIỆM THÔNG MINH
      </div>
    </footer>
  );
};

export default Footer;
