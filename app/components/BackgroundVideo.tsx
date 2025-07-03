

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload = "auto"
      className=" w-full h-full object-cover "
    >
      <source src="/videos/back_ground.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
