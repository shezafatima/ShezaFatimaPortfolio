import Link from "next/link";
import Conatainer from "./Container";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#160D23] text-white py-10">
      <Conatainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h1 className="text-2xl font-bold">Sheza Fatima</h1>
            <p className="text-sm mt-2 leading-relaxed text-white">
              I am a creative web designer and developer crafting responsive,
              user-centered experiences. Based in Pakistan, delivering digital
              excellence worldwide.
            </p>
          </div>

          
          <div className="hidden lg:block"></div>

          
          <div className="grid grid-cols-2  gap-28 items-start lg:items-end text-sm">
            {/* Quick Links */}
            <div className="flex flex-col gap-1 items-start lg:items-end">
              <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
              <Link
                href="/"
                className="text-white text-sm hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-white text-sm hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-white text-sm hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
              >
                Recent works
              </Link>
              <Link
                href="/#contact"
                className="text-white text-sm hover:text-[#B584DF] transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
              >
                Contact
              </Link>
            </div>

            {/* Social Icons & Email */}
            <div className="flex flex-col gap-4 items-center lg:items-end text-center lg:text-right">
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xl">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/sheza-fatima-437b17333/"
                  className=" transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
                >
                  <BsLinkedin />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/1824digital_sf?igsh=ZGUzMzM3NWJiOQ=="
                  className=" transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
                >
                  <BsInstagram />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61566351903578&mibextid=ZbWKwL"
                  className=" transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
                >
                  <BsFacebook />
                </Link>

                <Link
                  target="_blank"
                  href="https://github.com/shezafatima"
                  className=" transition duration-300 ease-in-out hover:transform hover:translate-y-0.5 inline-block"
                >
                  <BsGithub />
                </Link>
              </div>
              <p className="text-xs">s2636309@gmail.com</p>
              <p className="text-[10px]">
                © {new Date().getFullYear()} Sheza Fatima. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Conatainer>
    </footer>
  );
}
