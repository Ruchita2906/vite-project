import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 className="text-center mb-4">PROJECTS</h1>

        <div className="d-flex flex-column gap-4">
          {project.map((data) => (
            <div
              key={data.id}
              className="card bg-dark text-light p-3"
              style={{
                border: "1px solid yellow",
                borderRadius: "10px",
                boxShadow: "5px 5px 15px rgba(255, 255, 0, 0.3)",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Horizontal Layout */}
              <div className="d-flex flex-column flex-md-row align-items-center">

                {/* LEFT SIDE - IMAGE */}
                <div className="p-3">
                  <img
                    src={data.imageSrc}
                    alt={data.title}
                    style={{
                      width: "260px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="p-3 flex-grow-1">

                  <h3 className="text-warning">{data.title}</h3>

                  <p>{data.description}</p>

                 
                  {/* Buttons */}
                  <div className="mt-2">
                    <a
                      href={data.demo}
                      className="btn btn-primary mx-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>

                    <a
                      href={data.source}
                      className="btn btn-warning"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
