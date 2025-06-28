import Image from "next/image";
import Conatainer from "./Container";
import MotionWrapper from "./MotionWrapper";


export default function Services() {
  return (
    
    <Conatainer>
      <section className="relative py-16 pb-36 text-white overflow-hidden">
        {/* Background Elements */}
        <Image
          src="/images/star.png"
          alt="star"
          width={1000}
          height={1000}
          className="absolute -ml-7 bottom-5 w-64 opacity-70 z-0"
        />
        <Image
          src="/images/growth.png"
          alt="rocket"
          width={1000}
          height={1000}
          className="absolute right-0 top-0 w-72 opacity-70 z-0 md:block hidden"
        />

        <MotionWrapper>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">My Services</h2>
            <p className="text-lg mb-12 text-white/70">
              High-quality solutions tailored to your needs, without overhead or confusion.
            </p>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((item, index) => (
                <div
                  key={item.title}
                  className={`w-full sm:w-[45%] lg:w-[18%] bg-white/2 backdrop-blur-md border-white/15 border-2 rounded-xl p-6 text-white shadow-xl 
                    ${index === 1 ? "lg:rotate-[-4deg]" : ""}
                    ${index === 2 ? "lg:rotate-[2deg]" : ""}
                    ${index === 3 ? "lg:rotate-[-3deg]" : ""}
                    ${index === 4 ? "lg:rotate-[2deg]" : ""}
                  `}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-md mb-4 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </section>
    </Conatainer>
  );
}

const services = [
  {
    title: "Frontend (Next.js) Developer",
    desc: "Responsive, scalable and fast-loading websites using modern frontend frameworks.",
    icon: "💻",
    bg: "bg-blue-600",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your online presence through SEO, ads, and conversion-focused campaigns.",
    icon: "📈",
    bg: "bg-purple-600",
  },
  {
    title: "Graphic Designing",
    desc: "Custom logos, banners, and visual branding with a creative and unique style.",
    icon: "🎨",
    bg: "bg-green-600",
  },
  {
    title: "Social Media Managing",
    desc: "Strategy, content, and analytics to grow and manage your brand's social media.",
    icon: "📱",
    bg: "bg-pink-600",
  },
  {
    title: "Video Editing",
    desc: "High-quality video edits tailored for content creators and brands.",
    icon: "🎬",
    bg: "bg-yellow-500",
  },
];
