import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

const About = () => {
  return (
    <div id="about">
      <MotionWrapper>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 pt-20 pb-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-5xl sm:font-bold text-3xl mb-4  drop-shadow-lg text-white">
                About me
              </h1>
              <p className="mb-8 leading-relaxed text-white text-sm sm:text-[23px]">
                As a forward-thinking developer and digital creator, I fuse
                design, marketing, and technology to craft intelligent,
                engaging, and performance-driven experiences. From clean,
                responsive interfaces in Next.js to smart, interactive tools
                powered by Python and Streamlit, I thrive on turning complex
                ideas into real-world solutions. Rooted in both aesthetic
                intuition and technical depth, my work spans web development,
                graphic design in Canva, and strategic growth through digital
                marketing. Now diving into Agentic AI, I’m driven to build
                systems that think, adapt, and elevate user experience. Whether
                it’s launching e-commerce platforms, prototyping AI-powered
                tools, or scaling brands with precision — I’m here to design
                with intent and build with impact. Let’s shape what’s next.
              </p>
              
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded sm:w-[450px]"
              src="/images/about.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>

            
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
};
export default About;
