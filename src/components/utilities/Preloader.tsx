import { useRef, useEffect } from 'react';

interface PreloaderProps {
  onFinished: () => void;
}

const Preloader = ({ onFinished }: PreloaderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If the video somehow stalls or fails, fall back after 8 seconds
    const fallback = setTimeout(onFinished, 8000);

    const handleEnded = () => {
      clearTimeout(fallback);
      onFinished();
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      clearTimeout(fallback);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onFinished]);

  return (
    <div className="preloader-wrap preloader-video">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="preloader-video__media"
      >
        <source src="/assets/video/zenorix animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;