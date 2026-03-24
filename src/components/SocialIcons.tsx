import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://play.google.com/store/apps/dev?id=9167592278410174030" target="_blank" style={{fontSize: "0.8rem"}}>
            Play
          </a>
        </span>
        <span>
          <a href="https://rahbar.itch.io/rahbar-portfolio" target="_blank" style={{fontSize: "0.8rem"}}>
            Itch
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/rahbar-zafar-1a4516253/" target="_blank" style={{fontSize: "1.2rem"}}>
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://github.com/RahbarZafar" target="_blank" style={{fontSize: "1.2rem"}}>
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/rahber.gamedev?igsh=MTdtb3c3Yno5YzhqcQ%3D%3D" target="_blank" style={{fontSize: "1.2rem"}}>
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
