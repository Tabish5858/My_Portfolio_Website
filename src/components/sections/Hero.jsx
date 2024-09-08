import { HashLink as Link } from "react-router-hash-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroData from "../../data/heroData";

function Hero() {
  const { name, title, githubUrl, linkedinUrl, skills, attributes } = heroData;

  return (
    <section className="Hero">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          <div className="col-md-6">
            <div className="d-flex flex-column gap-lg-5 gap-4 text-md-start text-center align-items-md-start align-items-center">
              <div>
                <h2>Hello,</h2>
                <h2>
                  This is <span>{name}</span>, I'm a Professional{" "}
                  <span>{title}</span>.
                </h2>
              </div>
              <div className="d-flex gap-3">
                <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </Link>
                <Link
                  to={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </Link>
              </div>
              <div className="d-flex gap-lg-3 gap-2 flex-sm-row flex-column">
                <Link to="/#contact" className="hover1" smooth>
                  Contact Me{" "}
                </Link>
                <Link to="/resume" className="hover2">
                  Get Resume{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative rounded bg-gradient-to-r">
              <div className="d-flex flex-row gap-2 p-lf-4 p-3">
                <div className="rounded-circle bg-danger"></div>
                <div className="rounded-circle bg-warning"></div>
                <div className="rounded-circle bg-success"></div>
              </div>
              <div className="border-1 p-lg-4 p-3">
                <code className="d-flex flex-column gap-2">
                  <div className="d-flex gap-1">
                    <span className="me-2 text-green">const</span>
                    <span className="me-2 text-white">coder</span>
                    <span className="me-2 text-pink">=</span>
                    <span className="text-gray">{"{"}</span>
                  </div>
                  <div>
                    <span className="ms-lg-4 ms-3 text-white">name:</span>
                    <span className="text-gray">'</span>
                    <span className="text-amber">{name}</span>
                    <span className="text-gray">',</span>
                  </div>
                  <div className="ms-lg-4 ms-3 me-2 d-flex gap-1 flex-wrap">
                    <span className="text-white">skills:</span>
                    <span className="text-gray">{"["}</span>
                    {skills.map((skill, index) => (
                      <span key={index}>
                        <span className="text-amber">{skill}</span>
                        {index < skills.length - 1 && (
                          <span className="text-gray">', '</span>
                        )}
                      </span>
                    ))}
                    <span className="text-gray">{"]"}</span>
                  </div>
                  <div>
                    <span className="ms-lg-4 ms-3 me-2 text-white">
                      hardWorker:
                    </span>
                    <span className="text-amber">
                      {attributes.hardWorker.toString()}
                    </span>
                    <span className="text-gray">,</span>
                  </div>
                  <div>
                    <span className="ms-lg-4 ms-3 me-2 text-white">
                      quickLearner:
                    </span>
                    <span className="text-amber">
                      {attributes.quickLearner.toString()}
                    </span>
                    <span className="text-gray">,</span>
                  </div>
                  <div>
                    <span className="ms-lg-4 ms-3 me-2 text-white">
                      problemSolver:
                    </span>
                    <span className="text-amber">
                      {attributes.problemSolver.toString()}
                    </span>
                    <span className="text-gray">,</span>
                  </div>
                  <div>
                    <span className="ms-lg-4 ms-3 me-2 text-green">
                      hireable:
                    </span>
                    <span className="text-amber">function</span>
                    <span className="text-gray">{"() {"}</span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 me-2 text-amber">return</span>
                    <span className="text-gray">(</span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 ps-lg-3 ps-2 text-cyan-400">
                      this.
                    </span>
                    <span className="me-2 text-white">hardWorker</span>
                    <span className="text-amber">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 ps-lg-3 ps-2 text-cyan-400">
                      this.
                    </span>
                    <span className="me-2 text-white">problemSolver</span>
                    <span className="text-amber">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 ps-lg-3 ps-2 text-cyan-400">
                      this.
                    </span>
                    <span className="me-2 text-white">skills.length</span>
                    <span className="me-2 text-amber">&gt;=</span>
                    <span className="text-amber">5</span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 ps-lg-5 ps-4 me-2 text-gray">
                      );
                    </span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 ps-lg-4 ps-3 text-gray">
                      {"}"};
                    </span>
                  </div>
                  <div>
                    <span className="ms-lg-5 ms-4 text-gray">{"}"};</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
