import "../styles/Update.scss";
import { UpdateData } from "../data/UpdateData";
import { GrUpdate } from "react-icons/gr";
export const Update = () => {
  return (
    <div className="update-container">
      <h2>Updates 💹</h2>
      {UpdateData.map((update) => {
        return (
          <div className="update" key={update.id}>
            <div className="update-description">
              <h3 className="update-title">{update.title}</h3>
              <p className="update-brief">{update.description}</p>
              <p className="update-date">{update.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
