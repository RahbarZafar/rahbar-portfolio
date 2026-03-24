import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box" style={{ flexDirection: "column", alignItems: "flex-start", paddingLeft: "10%"}}>
        <h2 className="title" style={{ marginRight: "0", marginBottom: "30px" }}>
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
        <div className="core-expertise magical-box">
          <h3>Core Expertise</h3>
          <ul>
            <li>Unity Engine (2D & 3D)</li>
            <li>C# Gameplay Programming</li>
            <li>Mobile Game Optimization</li>
            <li>UI/UX & HUD Systems</li>
            <li>Ads & Monetization Integration</li>
            <li>Google Play Console & Publishing</li>
          </ul>
        </div>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch magical-box"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>GAME DEVELOPMENT</h3>
              <h4>Interactive Experiences</h4>
              <p>
                Crafting performant, engaging mechanics with modern game engines.
                From 2D puzzles to 3D worlds, I deliver complete experiences.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Unity 2D</div>
                <div className="what-tags">Unity 3D</div>
                <div className="what-tags">C#</div>
                <div className="what-tags">URP</div>
                <div className="what-tags">Cinemachine</div>
                <div className="what-tags">Collisions</div>
                <div className="what-tags">PlayerPrefs</div>
                <div className="what-tags">Shader Graph</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch magical-box"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PUBLISHING</h3>
              <h4>Analytics & Monetization</h4>
              <p>
                Building AAB bundles and managing Play Console deployments.
                Integrating rewarded ads and leaderboards for maximum engagement.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Android Build</div>
                <div className="what-tags">AAB Publishing</div>
                <div className="what-tags">Play Console</div>
                <div className="what-tags">Play Services</div>
                <div className="what-tags">Rewarded Ads</div>
                <div className="what-tags">Unity Ads</div>
                <div className="what-tags">Git / GitHub</div>
                <div className="what-tags">Analytics</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
