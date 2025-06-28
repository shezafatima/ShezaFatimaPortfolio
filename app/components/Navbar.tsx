import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-20 bg-transparent backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Sheza Fatima</div>
        <nav className="md:hidden">
          <MobileNavbar/>
        </nav>
        <nav className="space-x-16 hidden md:flex">
          <Link
            href="/"
            className="text-white hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-white hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-white hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
          >
            Recent works
          </Link>
          <Link
            href="/#contact"
            className="text-white hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
          >
            Contact
          </Link>
          <button className="bg-white px-3 -my-2 rounded-full transition duration-300 ease-in-out transform hover:scale-95 ">
            <Link href="/resume.pdf"
                  target="_blank" 
                  download
                  className="text-[#0D031C] font-bold   ">
            View Resume
            </Link>
          </button>
        </nav>
      </div>
    </div>
  );
}