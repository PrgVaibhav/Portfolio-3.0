import "../styles/Socials.scss";
import { FiGithub } from "react-icons/fi";
import { CgArrowTopRight } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { SiHashnode, SiFiverr } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

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
            aria-label="GitHub Profile Link"
          >
            @prgVaibhav <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <BsMailbox className="social-icons" />
          <span>Mail</span>
          <a
            href="mailto:vaibhav.pandey1508@gmail.com"
            aria-label="Email Message Link"
          >
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
            aria-label="Twitter Profile Link"
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
            aria-label="Instagram Profile Link"
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
            aria-label="LinkedIn Profile Link"
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
            aria-label="Hashnode Profile Link"
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
            aria-label="YouTube Profile Link"
          >
            @WebDevCode <CgArrowTopRight className="arrow" />
          </a>
        </div>
        <div className="social">
          <TbBrandFiverr className="social-icons" />
          <span>Fiverr</span>
          <a
            href="https://www.fiverr.com/webdevvaibhav/be-your-front-end-developer-and-designer-with-react-js"
            target="_blank"
            rel="noreferrer"
            aria-label="Fiverr Profile Link"
          >
            @WebDevVaibhav <CgArrowTopRight className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
