import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward, MdClose } from "react-icons/md";

const projects = [
  {
    title: "SatisFix",
    category: "ASMR Tidy & Organize",
    tools: "Unity 2D, C#",
    image: "/images/satisfix.png",
    gif: "/images/satisfix_gameplay.gif",
    video: "/videos/satisfix.mp4",
    link: "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.SatisFix.mobile2D&pcampaignid=web_share",
  },
  {
    title: "Shadow Blade: Dark Quest",
    category: "Action RPG",
    tools: "Unity 3D, C#, URP",
    image: "/images/shadowblade.png",
    gif: "/images/shadowblade_gameplay.gif",
    video: "/videos/shadowblade.mp4",
    link: "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.ShadowBladeDarkQuest.mobile2D&pcampaignid=web_share",
  },
  {
    title: "Find The Cat",
    category: "Hidden Object Casual",
    tools: "Unity 2D, C#",
    image: "/images/findthecat.png",
    gif: "/images/findthecat_gameplay.gif",
    video: "/videos/findthecat.mp4",
    link: "https://play.google.com/store/apps/details?id=com.M.R.Studio.FindTheCat&pcampaignid=web_share",
  },
  {
    title: "My Cozy Room",
    category: "Isometric Decor & Design",
    tools: "Unity 3D, C#",
    image: "/images/mycozyroom.png",
    gif: "/images/mycozyroom_gameplay.gif",
    video: "/videos/mycozyroom.mp4",
    link: "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.MyCozyRoom.mobile2D&pcampaignid=web_share",
  },
  {
    title: "Hidden Object: Tiny Clues",
    category: "Puzzle & Mystery",
    tools: "Unity 2D, C#",
    image: "/images/hiddenobject.png",
    gif: "/images/hiddenobject_gameplay.gif",
    video: "/videos/hiddenobject.mp4",
    link: "https://play.google.com/store/apps/details?id=com.M.R.studio.com.unity.HiddenObjectFindTinyClues.mobile2D&pcampaignid=web_share",
  },
  {
    title: "Game Template",
    category: "Mobile Casual",
    tools: "Unity, C#",
    image: "/images/template.png",
    gif: "/images/template_gameplay.gif",
    video: "/videos/template.mp4",
    link: "https://play.google.com/store/apps/details?id=com.M.R.Studio.com.unity.template.mobile2D&pcampaignid=web_share",
  }
];

const playPopSound = () => {
    try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
        // ignore
    }
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    playPopSound();
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    playPopSound();
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content magical-box">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                            {project.title} <MdArrowOutward style={{ color: 'var(--accentColor)', fontSize: '0.9em'}} />
                          </a>
                        </h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage 
                        image={project.image} 
                        alt={project.title} 
                        gif={project.gif} 
                        video={project.video} 
                        onPlay={() => {
                          if (project.video) {
                            setSelectedVideo(project.video);
                            setSelectedTitle(project.title);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setSelectedVideo(null)}>
              <MdClose />
            </button>
            <div className="video-modal-header">
              <h3>{selectedTitle}</h3>
            </div>
            <div className="video-modal-body">
              <video 
                key={selectedVideo}
                src={selectedVideo} 
                autoPlay 
                controls 
                preload="auto"
                playsInline 
                className="modal-video-player"
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
