

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
      <source src="https://res.cloudinary.com/kn4rgyiz/video/upload/v1787631218/back_ground.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
