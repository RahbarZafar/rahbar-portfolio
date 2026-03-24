import { useState } from "react";
import { MdPlayCircleOutline } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  gif?: string;
  video?: string;
  onPlay?: () => void;
}

const WorkImage = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    if (props.video && props.onPlay) {
      props.onPlay();
    } else if (props.gif) {
      setIsPlaying(!isPlaying);
      setImgError(false);
    }
  };

  return (
    <div className="work-image" onClick={handleClick} style={{ cursor: (props.video || props.gif) ? 'pointer' : 'default', position: 'relative' }}>
      <div className="work-image-in" style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        {(props.video || props.gif) && !isPlaying && (
          <div className="work-play-button" style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            zIndex: 10, 
            fontSize: '4rem', 
            color: 'var(--accentColor)',
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))',
            pointerEvents: 'none'
          }}>
            <MdPlayCircleOutline />
          </div>
        )}
        
        {/* Static image provides the base size and acts as a placeholder */}
        <img 
          src={props.image} 
          alt={props.alt} 
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxHeight: '400px', 
            objectFit: 'cover',
            display: 'block',
            opacity: (isPlaying && props.gif && !imgError) ? 0 : 1
          }} 
        />

        {isPlaying && props.gif && !imgError && (
          <img 
            src={props.gif} 
            alt={props.alt} 
            onError={() => setImgError(true)}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        )}

        {imgError && isPlaying && (
          <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,0,0,0.7)', color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', zIndex: 5 }}>
            Media missing. Replace {props.gif}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
