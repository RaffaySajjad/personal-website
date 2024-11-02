export const Portfolio: React.FC = () => (
  <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
    <div className="container">
      <div className="mi-sectiontitle">
        <h2>Portfolio</h2>
        <span>Portfolio</span>
      </div>
      <div className="row mt-30-reverse">
        {PORTFOLIO.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6 col-12 mt-30">
            <div className="mi-portfolio mi-portfolio-visible">
              <div className="mi-portfolio-image">
                <img height={302} src={project.thumbnail} alt="Reelife" />
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.link}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <h5>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.link}>
                  {project.heading}
                </a>
              </h5>
              <h6>{project.description}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PORTFOLIO = [
  {
    id: 1,
    alt: "Reelife",
    thumbnail: "/portfolio/reelife.png",
    link: "https://apps.shopify.com/reelife",
    heading: "Reelife Stories",
    description: "Shopable social experience",
  },
];
