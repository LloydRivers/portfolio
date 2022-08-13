import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>PhotoFolio Bootstrap Template - Index</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />

        <link href="/assets/css/main.css" rel="stylesheet" />
        <script
          defer
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        ></script>
        <script defer src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script
          defer
          src="/assets/vendor/glightbox/js/glightbox.min.js"
        ></script>
        <script defer src="/assets/vendor/aos/aos.js"></script>
        <script defer src="/assets/js/main.js"></script>
      </Head>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center  me-auto me-lg-0"
          >
            <img src="/assets/img/logo.png" alt="" />
            <i className="bi bi-camera"></i>
            <h1>PhotoFolio</h1>
          </a>

          <div className="header-social-links">
            <Link href="https://github.com/LloydRivers">
              <a target="_blank" className="github">
                <i className="bi bi-github"></i>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/lloyd-rivers-a80811164">
              <a target="_blank" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </Link>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

      <section
        id="hero"
        className="hero d-flex flex-column justify-content-center align-items-center"
        data-aos="fade"
        data-aos-delay="1500"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>
                Hi, I'm <span>Lloyd Rivers</span>, a junior developer from
                Leeds, UK.
              </h2>
              <p></p>
              <a href="contact.html" className="btn-get-started">
                Not available for hire
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main" data-aos="fade" data-aos-delay="1500">
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="/assets/img/gallery/gallery-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="/assets/img/gallery/gallery-1.jpg"
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="/assets/img/gallery/gallery-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="/assets/img/gallery/gallery-2.jpg"
                      title="Gallery 2"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="/assets/img/gallery/gallery-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="/assets/img/gallery/gallery-3.jpg"
                      title="Gallery 3"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="/assets/img/gallery/gallery-4.jpg"
                      title="Gallery 4"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main id="main" data-aos="fade" data-aos-delay="1500">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>About</h2>
                <p>
                  I am a motivated, ambitious junior developer with a passion
                  for building applications. I have knowledge of html, css,
                  javascript, react, nodejs, express, mongodb, postgresQL, redux
                  and a passion for learning new technologies.
                </p>

                <a className="cta-btn" href="contact.html">
                  Not currently available for hire
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="about">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-5 content">
                <h2>Work Experience</h2>
                <p className="fst-italic py-3">
                  I am currently working for Dedalus, one of the largest
                  providers of healthcare and diagnostic software in the world.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Started:</strong> <span>January 2022</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul></ul>
                  </div>
                </div>
                <p className="py-3">
                  Developing front-end and back-end applications in React, Node
                  + Express. Creating large, complex components in React.
                  Implemented new features, whilst maintaining existing code.
                  Working in an agile environment, with a focus on continuous
                  integration and deployment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
