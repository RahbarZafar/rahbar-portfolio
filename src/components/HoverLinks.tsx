import "./styles/style.css";

const playHoverSound = () => {
    try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
        // ignore
    }
};

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && `disable`} onMouseEnter={playHoverSound}>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
