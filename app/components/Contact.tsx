import Conatainer from "./Container";
import MotionWrapper from "./MotionWrapper";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center min-h-screen ">
      <Conatainer>
        <MotionWrapper>

        <section className="bg-[#590148] bg-opacity-10 backdrop-blur-lg p-10 rounded-4xl max-w-3xl w-full">
          <div className="text-center mb-12">
            <h1 className="sm:text-5xl text-4xl title-font mb-4 text-[#B584DF] sm:font-bold">
              Let&#x27;s Talk
            </h1>
          </div>

          <form
            className="flex flex-wrap -m-2"
            action="https://formspree.io/f/xldeeyep"
            method="POST"
          >
            <div className="p-2 w-1/2">
              <label htmlFor="name" className="leading-7 sm:text-xl text-sm text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3"
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="email" className="leading-7 sm:text-xl text-sm text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3"
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="subject" className="leading-7 sm:text-xl text-sm text-gray-200">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3"
                required
              />
            </div>
            <div className="p-2 w-full">
              <label htmlFor="message" className="leading-7 sm:text-xl text-sm text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto font-bold bg-white text-[#0D031C] border-0 py-2 px-8 transition duration-300 ease-in-out transform hover:scale-95 cursor-pointer rounded text-lg">
                Submit
              </button>
            </div>
          </form>
        </section>
        </MotionWrapper>
      </Conatainer>
    </div>
  );
};

export default Contact;
