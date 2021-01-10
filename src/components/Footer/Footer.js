import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <p>
          {" "}
          This is a clone of{" "}
          <a href="https://inshorts.com/en/read">
            {" "}
            <b>Inshorts.com </b>
          </a>
        </p>
        <br />
        Inspired by <a href="https://twitter.com/Piyush_eon">Roadside Coder </a>
        <hr style={{ width: 90 }} />
      </div>

      <div class="icons-div">
        <ul>
          <p> Reach out to me on : </p>{" "}
          <button>
            {" "}
            <a href="https://github.com/rajat-mehra05">
              <i class="fa fa-github-square" aria-hidden="true"></i>{" "}
            </a>
          </button>{" "}
          <button>
            {" "}
            <a href="https://twitter.com/_rajat_mehra_">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>{" "}
            </a>
          </button>{" "}
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/rajat-mehra-1a0349a9/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>{" "}
            </a>{" "}
          </button>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
