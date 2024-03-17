import "./HireMe.css";

const HireMe = () => {
  return (
    <>
      <div className="content">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="mt-md-5 pt-md-5">
            <h2>Hire Me</h2>
            <p>
              At this point in time my personal site is still developing but its
              core functionalities are up.
            </p>
            <p>👇👇👇 See my resume. Lets create. 👍</p>
            <div>
              <a
                href="https://drive.google.com/file/d/1F941q8bGVdBCijSdXUiZdO54EcgtBFDu/view?usp=sharing"
                target="_blank"
                className="btn text-light border-light rounded-0 resume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMe;
