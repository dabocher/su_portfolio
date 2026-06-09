interface ImageAnimationProps {
  src: string;
}

export const ImageAnimation = ({ src }: ImageAnimationProps) => {
  const videoSrc = src.replace(".webp", ".mp4");
  return (
    <div className="w-full max-w-2xl " onClick={(e) => e.stopPropagation()}>
      <video
        src={videoSrc}
        autoPlay
        loop
        controls
        className="rounded-lg w-full h-full object-contain"
      />
    </div>
  );
};
