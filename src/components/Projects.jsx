import "../styles/Projects.scss";
import { CgArrowTopRight } from "react-icons/cg";
import { ProjectData } from "../data/ProjectData";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export const Projects = () => {
  const linkClickHandler = () => {
    const audio = new Audio("/src/audio/clicking.mp3");
    audio.play();
  };
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        {ProjectData.map((project) => {
          return (
            <div
              className="project"
              key={project.id}
              role="img"
              aria-label="All images of my projects"
            >
              {project.image1 &&
              project.image2 &&
              project.image3 &&
              project.image4 &&
              project.image5 &&
              project.image6 &&
              project.image7 &&
              project.image8 &&
              project.image9 ? (
                <Fade indicators={true} arrows={false}>
                  <img src={project.image1} alt={project.alt} />
                  <img src={project.image2} alt={project.alt} />
                  <img src={project.image3} alt={project.alt} />
                  <img src={project.image4} alt={project.alt} />
                  <img src={project.image5} alt={project.alt} />
                  <img src={project.image6} alt={project.alt} />
                  <img src={project.image7} alt={project.alt} />
                  <img src={project.image8} alt={project.alt} />
                  <img src={project.image9} alt={project.alt} />
                </Fade>
              ) : (
                <img src={project.image1} alt={project.alt} />
              )}
              <div className="project-title">
                <h3>{project.title}</h3>
                <span>
                  {project.completed === true
                    ? "💫 Completed"
                    : "⚒ Under Development"}
                </span>
              </div>
              <p>{project.description}</p>
              {project.liveLink && (
                <div className="links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={linkClickHandler}
                  >
                    Live Preview <CgArrowTopRight className="arrow" />
                  </a>
                  <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                    GitHub <CgArrowTopRight className="arrow" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
