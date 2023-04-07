// import "../styles/AboutMe.scss";
import "../styles/AboutMe.scss";
import hello from "../assets/hey hey hey.webp";
export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <img
          src={hello}
          alt="user saying hello"
          aria-label="user saying hello"
        />
        <div className="about-me-description">
          <h1>I'm Vaibhav</h1>
          <p>FrontEnd Developer From Bihar, India</p>
          <p>20</p>
        </div>
      </div>
      <div className="about-me-body">
        <h2>About me.</h2>
        <p>
          Hey, I'm a <strong className="special">FrontEnd developer</strong>, I
          love creating things that live on the web. I specialize in
          <strong className="special"> creating websites</strong> and{" "}
          <strong className="special">web applications</strong>. I'm a{" "}
          <strong className="special">fast learner</strong> and I love to learn
          new things.
        </p>
      </div>
      <div className="tools">
        <div className="daily">
          <h2>💻 Tools which I use daily:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="learning">
          <h2>🌠 Tools which I'm learning:</h2>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySql</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
