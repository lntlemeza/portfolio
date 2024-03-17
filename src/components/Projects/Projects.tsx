import { Link } from "react-router-dom";

import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <section className="content pt-5 mt-5">
        <div className="row g-5 d-flex justify-content-center">
          <div className="col-6 card-holder m-4 p-4">
            <div className="col ">
              <h1>Kultiv8 Consulting</h1>
              <h2 className="pt-2">Blog Post Website</h2>
              <p className="pt-1 pb-2">
                Kultiv8 is a career consulting company that offers its services
                to people who want to land a new job or switch careers. Apart
                from that, the owner of the company enjoys posting long-format
                content on his social media platforms. So, I approached him and
                asked if I could build a blog for him for my portfolio.
              </p>
              <Link
                className="view-project text-light border-light p-2"
                to="/project/details"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-files me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                </svg>
                See more details
              </Link>
            </div>
          </div>

          <div className="col-6 card-holder m-4 p-4">
            <div className="col card-body">
              <h1 className="">Upcoming Project</h1>
              <h2 className="pt-2">React Movie Site Clone</h2>
              <p className="pt-1 pb-2">
                So I saw movie website that looked cool and I thought I shoud
                clone it using React.
              </p>
              <a
                href="https://fmoviesz.to/home"
                className="view-project text-light border-light p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
                See the website.
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
