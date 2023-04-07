import "../styles/Blog.scss";
import { CgArrowTopRight } from "react-icons/cg";
export const Blog = ({ title, coverImage, brief, slug, dateAdded }) => {
  return (
    <div className="blog-container">
      <div className="blog">
        <div className="blog-image">
          <img src={coverImage} alt={title} />
        </div>
        <div className="blog-content">
          <h3>{title}</h3>
          <p>{brief}</p>
          <a
            href={`https://devxvaibhav.hashnode.dev/${slug}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Read More"
          >
            Read More <CgArrowTopRight className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
