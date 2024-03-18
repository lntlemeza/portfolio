import "./ProjectDetails.css";
import siteLanding from "../assets/kultiv8_images/Site_landing.png";
import dashboard from "../assets/kultiv8_images/manage_posts.png";
import editorActions from "../assets/kultiv8_images/publish_save_draft.png";
import userHandling from "../assets/kultiv8_images/adminsitrator_user_handling.png";
import backdrop2 from "../assets/backdrop2.jpg";

const ProjectDetails = () => {
  document.body.style.backgroundImage = `url(${backdrop2})`;

  return (
    <div className="content project-details mt-5 mb-5 pb-5">
      <div className="row d-flex justify-content-between">
        <div className="col">
          <h2>Project Details</h2>
        </div>

        <div className="col-12 col-md">
          <a
            href="https://kultiv8.azurewebsites.net/"
            target="_blank"
            className="btn btn-primary-none text-light border-light me-4 mt-3 mt-md-0 rounded-0"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/lntlemeza/KULTIV8_Site"
            target="_blank"
            className="btn btn-primary-none text-light border-light rounded-0  mt-3 mt-md-0"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h4>Project Description</h4>
        <p>
          The Kultiv8 Consulting blog system aids individuals in career
          transitions and job searches. Hosted on Azure, the platform features
          secure user authentication and authorization through .NET 6 and Entity
          Framework Core. It offers robust functionalities for managing blog
          posts and user accounts. Technologies used include .NET 6, Entity
          Framework Core, SQL Server, and Azure hosting services.
        </p>
      </div>
      <section className="sec-1 d-none d-md-block">
        <div className="site-landing mt-5">
          <div className="row">
            <div className="col-md">
              <img src={siteLanding} style={{ width: "100%" }}></img>
            </div>
            <div className="col-md">
              <h5>Landing Page</h5>
              <p>
                I chose the split-screen layout for the landing page of the blog
                system to ensure a visually balanced and engaging experience for
                users. Placing a friendly image of the client on one side and
                the lead text with a clear call-to-action on the other side
                helps guide users' attention and encourages interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="site-landing mt-5 pt-5">
          <div className="row">
            <div className="col-md">
              <h5>Dashboard</h5>
              <p>
                The dashboard serves as the centralized control panel accessible
                to administrative roles, primarily administrators and employees,
                upon signing into the system. Admins have the privilege to
                perform CRUD (Create, Read, Update, Delete) operations on posts,
                including the ability to save drafts for future publication.
                This section provides a comprehensive interface for managing
                blog content efficiently and effectively, empowering
                administrators to maintain and curate the blog with ease.
              </p>
            </div>
            <div className="col-md">
              <img src={dashboard} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>

        <div className="site-landing mt-5 pt-5">
          <div className="row">
            <div className="col-md">
              <img src={editorActions} style={{ width: "100%" }}></img>
            </div>
            <div className="col-md">
              <h5>Post Management</h5>
              <p>
                The post editor is designed with CKEditor 5, providing users
                with a versatile text editing experience. It seamlessly
                integrates image insertion capabilities, allowing users to
                enhance their posts with visuals. Additionally, users can
                include a cover image to complement and personalize each post.
                Posts are saved with attribution to authors, ensuring proper
                acknowledgment, and the date of publication is recorded for
                chronological organization and reference.
              </p>
            </div>
          </div>
        </div>

        <div className="site-landing mt-5 pt-5">
          <div className="row">
            <div className="col-md">
              <h5>User Management</h5>
              <p>
                In the user management section, administrators have exclusive
                access to the administrative part of the dashboard, while
                employees do not. Administrators can perform various user
                management tasks, including adding new users, assigning roles to
                them, and deleting existing users as needed. This functionality
                empowers administrators to maintain an organized and secure user
                base, ensuring that access privileges are appropriately assigned
                and managed across the system.
              </p>
            </div>
            <div className="col-md">
              <img src={userHandling} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-1 d-md-none">
        <div className="site-landing mt-5">
          <div className="row">
            <div className="col-md">
              <h5>Landing Page</h5>
              <p>
                I chose the split-screen layout for the landing page of the blog
                system to ensure a visually balanced and engaging experience for
                users. Placing a friendly image of the client on one side and
                the lead text with a clear call-to-action on the other side
                helps guide users' attention and encourages interaction.
              </p>
            </div>
            <div className="col-md">
              <img src={siteLanding} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>

        <div className="site-landing mt-5 pt-5">
          <div className="row">
            <div className="col-md">
              <h5>Dashboard</h5>
              <p>
                The dashboard serves as the centralized control panel accessible
                to administrative roles, primarily administrators and employees,
                upon signing into the system. Admins have the privilege to
                perform CRUD (Create, Read, Update, Delete) operations on posts,
                including the ability to save drafts for future publication.
                This section provides a comprehensive interface for managing
                blog content efficiently and effectively, empowering
                administrators to maintain and curate the blog with ease.
              </p>
            </div>
            <div className="col-md">
              <img src={dashboard} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>

        <div className="site-landing mt-5 pt-5">
          <div className="row">
            <div className="col-md">
              <h5>Post Management</h5>
              <p>
                The post editor is designed with CKEditor 5, providing users
                with a versatile text editing experience. It seamlessly
                integrates image insertion capabilities, allowing users to
                enhance their posts with visuals. Additionally, users can
                include a cover image to complement and personalize each post.
                Posts are saved with attribution to authors, ensuring proper
                acknowledgment, and the date of publication is recorded for
                chronological organization and reference.
              </p>
            </div>
            <div className="col-md">
              <img src={editorActions} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>

        <div className="site-landing mt-5 pt-5">
          <div className="row">
            <div className="col-md">
              <h5>User Management</h5>
              <p>
                In the user management section, administrators have exclusive
                access to the administrative part of the dashboard, while
                employees do not. Administrators can perform various user
                management tasks, including adding new users, assigning roles to
                them, and deleting existing users as needed. This functionality
                empowers administrators to maintain an organized and secure user
                base, ensuring that access privileges are appropriately assigned
                and managed across the system.
              </p>
            </div>
            <div className="col-md">
              <img src={userHandling} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
