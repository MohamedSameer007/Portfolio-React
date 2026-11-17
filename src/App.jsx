import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import skillsData from "./json/skills.json";
import projectData from "./json/projects.json";
import mainData from "./json/main.json";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#foott">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home">
        {/* <p className="text-center">Portfolio</p>
        <p className="text-center">Designer</p>
        <p className="text-center">Artist</p>
        <p className="text-center">Web Developer</p>
        <p className="text-center">Full Stack Engineer</p> */}

        <div
          className="home-head"
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2>
            Hey <span className="h2">There</span>
          </h2>
          <h1>
            I'm <span className="h1">Sameer</span>
          </h1>
        </div>

        <div className="home-extra">
          <div className="home-back">
            <div className="back"></div>
            <h2>Porfolio</h2>
            <h5>
              <span>Hey</span> there! I'm Sameer, a passionate Full Stack Developer who
              thrives on building scalable and user-friendly web
              applications. I specialize in the MERN stack and modern web
              technologies, transforming creative ideas into practical solutions.
              I enjoy exploring new technologies and bringing ideas to life through code.
            </h5>
          </div>
        </div>

        <div className="back1">
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div>
        </div>
      </section>

      <section id="about">
        <div
          className="about-pic"
          data-aos="zoom-in"
          data-aos-offset="150"
          data-aos-duration="700"
        >
          <img
            src="https://thumbs.dreamstime.com/b/avatar-gold-icon-vector-illustration-golden-particle-background-isolated-vector-sign-symbol-education-icon-black-background-168668166.jpg"
            alt="About Me"
          />

          <div className="about-content">
            <h1>ABOUT ME</h1>
            <p>
              I'm an Information Technology student and Full Stack Developer
              passionate about building scalable, user-friendly web
              applications using the MERN stack. With experience in React.js,
              Node.js, Express.js, and MongoDB, I enjoy turning ideas into
              practical solutions.
            </p>
            <p>
              Beyond web development, I have a strong interest in problem
              solving. Having solved 400+ problems on
              LeetCode and worked on individual and team projects, I strive
              to improve my skills, write efficient code, and create
              responsive digital experiences.
            </p>
          </div>

        </div>
      </section>

      <section id="skills">
        <h1 className="text-center">My Skills</h1>
        <div className="container">
          {skillsData.map((skill, index) => {
            return (
              index % 2 === 0 && (
                <div className="row p-lg-3 p-0 mb-lg-3 mb-0" key={index}>
                  {[skillsData[index], skillsData[index + 1]].map((item, i) =>
                    item ? (
                      <div
                        key={i}
                        className="col-lg-6 col-12 pt-lg-0 pt-2"
                        data-aos={i === 0 ? "fade-right" : "fade-left"}
                        data-aos-offset="100"
                        data-aos-duration="700"
                      >
                        <label>{item.label}</label>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: `${item.percentage}%` }}
                          >
                            {item.percentage}%
                          </div>
                        </div>
                      </div>
                    ) : null,
                  )}
                </div>
              )
            );
          })}
        </div>
      </section>

      <section id="projects">
        <div className="container pb-lg-5">
          <h1 className="display-4 text-center">Projects</h1>

          {mainData
            .reduce((rows, project, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(project);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div className="row my-5" key={rowIndex}>
                {row.map((proj, colIndex) => (
                  <div
                    key={colIndex}
                    className="col-lg-4 col-12 my-lg-0 my-4"
                    data-aos="zoom-in"
                    data-aos-offset={100 * (colIndex + 1)}
                    data-aos-duration="700"
                  >
                    <div className="card" style={{ width: "25rem" }}>
                      <div className="card-head">
                        <img
                          src={proj.image}
                          className="card-img-top"
                          alt={proj.title}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{proj.title}</h5>
                        <p className="card-text">{proj.description}</p>
                        <a
                          href={proj.link}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section>

      <section id="projects">
        <div className="container pb-lg-5">
          <h1 className="display-4 text-center">Mini Projects</h1>

          {projectData
            .reduce((rows, project, index) => {
              if (index % 4 === 0) rows.push([]);
              rows[rows.length - 1].push(project);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div className="row my-5" key={rowIndex}>
                {row.map((proj, colIndex) => (
                  <div
                    key={colIndex}
                    className="col-lg-3 col-md-6 col-12 mb-4"
                    data-aos="zoom-in"
                    data-aos-offset={100 * (colIndex + 1)}
                    data-aos-duration="700"
                  >
                    <div className="card h-100">
                      <div className="card-head">
                        <img
                          src={proj.image}
                          className="card-img-top"
                          alt={proj.title}
                        />
                      </div>

                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{proj.title}</h5>
                        <p className="card-text">{proj.description}</p>

                        <a
                          href={proj.link}
                          className="btn btn-primary mt-auto"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section>

      <footer id='foott'>
        <div className="container py-4">
          <div className="row text-center gy-3">
            <div className="col-12 col-md-4">
              <a
                href="tel:+918754260806"
                className="text-warning text-decoration-none"
              >
                <i className="fa-solid fa-phone me-2"></i>
                +91 8754260806
              </a>
            </div>

            <div className="col-12 col-md-4">
              <a
                href="mailto:sameer07096@gmail.com"
                className="text-warning text-decoration-none"
              >
                <i className="fa-solid fa-envelope me-2"></i>
                sameer07096@gmail.com
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a
                href="https://github.com/MdSameer007"
                className="text-warning text-decoration-none"
              >
                <i className="fa-brands fa-github me-2"></i>
                GitHub
              </a>
            </div>

            <div className="col-6 col-md-2">
              <a
                href="https://leetcode.com/u/md_Sameer07/"
                className="text-warning text-decoration-none"
              >
                <i className="fa-solid fa-code me-2"></i>
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </footer>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>
    </>
  );
}

export default App;