import BackgroundVideo from "./BackgroundVideo";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
      </div>

      {/* Hero text */}
      <div className="h-full flex flex-col justify-center items-center text-center px-8 relative z-10">
        <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#B584DF] via-[#70D3F8] to-[#DB6DFF] drop-shadow-lg">
          IT&#x27;S SHEZA FATIMA
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl max-w-xl tracking-wider">
          Crafting Web, Marketing, and AI-Driven Experiences
        </p>
      </div>
    </div>
  );
}
