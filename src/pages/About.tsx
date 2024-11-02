export const About: React.FC = () => (
  <>
    <div className="mi-about-area mi-section mi-padding-top">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>About Me</h2>
          <span>About Me</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="mi-about-content">
              <h3>
                I am <span className="color-theme">Raffay Sajjad</span>
              </h3>
              <ul>
                <li>
                  <b>Full Name</b> Raffay Sajjad
                </li>
                <li>
                  <b>Languages</b> English, Spanish, Urdu
                </li>
                <li>
                  <b>Address</b> 312 W 2nd St, Casper, Wyoming, WY 82601, United
                  States
                </li>
                <li>
                  <b>New Roles</b> Open
                </li>
              </ul>
              <a className="mi-button" href="/files/Raffay_Sajjad.pdf">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mi-service-area mi-section mi-padding-top">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>Services</h2>
          <span>Services</span>
        </div>
        <div className="mi-service-wrapper">
          <div className="row mt-30-reverse">
            {SERVICES.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <i className={`lni ${service.icon} size-md`}></i>
                  </span>
                  <h5>{service.name}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>Reviews</h2>
          <span>Reviews</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="slick-slider mi-testimonial-slider slick-initialized"
              dir="ltr">
              <div className="slick-list" style={{ height: "249px" }}>
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    transform: "translate3d(-1326px, 0px, 0px)",
                    width: "5304px",
                  }}>
                  <div
                    data-index="-2"
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Expedita impedit nobis tempore
                              quaerat quibusdam.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Susan Yost</h5>
                            <h6>Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Irving Feeney</h5>
                            <h6>Fiverr Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Expedita impedit nobis tempore
                              quaerat quibusdam, aliquid maxime tempora.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Burdette Turner</h5>
                            <h6>Web Developer, Abc Company</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Expedita impedit nobis tempore
                              quaerat quibusdam.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Susan Yost</h5>
                            <h6>Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Irving Feeney</h5>
                            <h6>Fiverr Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Expedita impedit nobis tempore
                              quaerat quibusdam, aliquid maxime tempora.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Burdette Turner</h5>
                            <h6>Web Developer, Abc Company</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Expedita impedit nobis tempore
                              quaerat quibusdam.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Susan Yost</h5>
                            <h6>Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "663px" }}>
                    <div>
                      <div className="mi-testimonial-slideritem">
                        <div className="mi-testimonial">
                          <div className="mi-testimonial-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.
                            </p>
                          </div>
                          <div className="mi-testimonial-author">
                            <h5>Irving Feeney</h5>
                            <h6>Fiverr Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const SERVICES = [
  {
    id: 1,
    icon: "lni-code",
    name: "Web Development",
    description:
      "Specializing in high-performance web apps using React, Next.js, and Node.js. I create scalable, secure, and optimized solutions, integrating RESTful and GraphQL APIs with modern architectures.",
  },
  {
    id: 2,
    icon: "lni-mobile",
    name: "Mobile Application",
    description:
      "Building cross-platform mobile applications with React Native, focusing on seamless performance and intuitive user experiences for both iOS and Android, backed by scalable cloud infrastructure.",
  },
  {
    id: 3,
    icon: "lni-cloud",
    name: "Cloud Infrastructure",
    description:
      "Deploying and managing scalable cloud infrastructure using AWS services like EC2, Lambda, S3, and Docker. I ensure high availability and automated CI/CD pipelines for efficient, secure operations.",
  },
];
