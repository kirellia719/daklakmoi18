import './style.scss';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__bottom">
        © {new Date().getFullYear()} Vali 360. Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;
