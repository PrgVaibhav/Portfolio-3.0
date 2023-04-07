import "../styles/Socials.scss";
import { FiGithub } from "react-icons/fi";
import { CgArrowTopRight } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";

export const Socials = () => {
  return (
    <div className="social-container">
      <h2>Connect With Me</h2>
      <div className="socials">
        <div className="social">
          <FiGithub className="social-icons" />
          <span>GitHub</span>
          <a
            href="https://github.com/PrgVaibhav"
            target="_blank"
            rel="noreferrer"
          >
            @prgVaibhav <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <BsMailbox className="social-icons" />
          <span>Mail</span>
          <a href="mailto:vaibhav.pandey1508@gmail.com">
            @vaibhav <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <CiTwitter className="social-icons" />
          <span>Twitter</span>
          <a
            href="https://twitter.com/SyntaxError408"
            target="_blank"
            rel="noreferrer"
          >
            @SyntaxError408 <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <RxInstagramLogo className="social-icons" />
          <span>Instagram</span>
          <a
            href="https://www.instagram.com/codeewithme/"
            target="_blank"
            rel="noreferrer"
          >
            @codeewithme <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <AiOutlineLinkedin className="social-icons" />
          <span>LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/devxvaibhav"
            target="_blank"
            rel="noreferrer"
          >
            @devXvaibhav <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <SiHashnode className="social-icons" />
          <span>Hashnode</span>
          <a
            href="https://vaibhavwrites.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            @devXvaibhav <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <AiOutlineYoutube className="social-icons" />
          <span>YouTube</span>
          <a
            href="https://www.youtube.com/channel/UCGbaw2zSU3QlqlGDC7gXmag"
            target="_blank"
            rel="noreferrer"
          >
            @WebDevCode <CgArrowTopRight className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
