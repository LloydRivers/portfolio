const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>PortFolio</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            <a href="https://bootstrapmade.com/">Made with Next + Bootstrap</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader">
        <div className="line"></div>
      </div>
    </>
  );
};

export default Footer;
