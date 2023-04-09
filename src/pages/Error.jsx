import error from "../assets/error.gif";
import "../styles/Error.scss";
export const Error = () => {
  return (
    <div className="error-container">
      <img src={error} alt="Error giphy" aria-label="error giphy" />
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
};
