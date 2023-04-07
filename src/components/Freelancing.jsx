import "../styles/Freelancing.scss";
import { CgArrowTopRight } from "react-icons/cg";
export const Freelancing = () => {
  return (
    <div className="freelancing-container">
      <p>
        I'm currently open to work as a freelancer or a team member on any
        project which includes front end development.
      </p>
      <p>
        You can drop a message on my mail{" "}
        <a href="mailto:vaibhav.pandey1508@gmail.com">
          here
          <CgArrowTopRight className="arrow" />
        </a>
      </p>
    </div>
  );
};
