import { Link } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import "../styles/Updates.scss";
export const Updates = () => {
  return (
    <div className="updates-container">
      <p>
        If you're interested you can see the updates I am making in my portfolio
        from this{" "}
        <Link to="/update">
          Update <CgArrowTopRight className="arrow" />
        </Link>{" "}
        section
      </p>
    </div>
  );
};
