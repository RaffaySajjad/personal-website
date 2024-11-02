export const Home: React.FC = () => (
  <div className="mi-home-area mi-padding-section">
    <div className="mi-home-particle" id="tsparticles">
      <canvas
        data-generated="false"
        style={{
          width: "100% !important",
          height: "100% !important",
          //   @ts-expect-error: Infer a better type
          position: "fixed !important",
          zIndex: "0 !important",
          top: "0px !important",
          left: "0px !important",
          pointerEvents: "none",
        }}
        width="3456"
        height="858"></canvas>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <div className="mi-home-content">
            <h1>
              Hi, I am <span className="color-theme">Raffay Sajjad</span>
            </h1>
            <p>
              I specialize in building scalable, high-performance applications.
              I&apos;m committed to writing clean, efficient code while
              integrating robust backend services and delivering seamless,
              user-friendly experiences across platforms.
            </p>
            <ul className="mi-socialicons mi-socialicons-bordered">
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://linkedin.com/in/raffay-sajjad">
                  <i className="lni lni-linkedin size-md"></i>
                </a>
              </li>
              {/* <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com">
                  <i className="lni lni-twitter size-md"></i>
                </a>
              </li> */}
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/RaffaySajjad">
                  <i className="lni lni-github size-md"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
