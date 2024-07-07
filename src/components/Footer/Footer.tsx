import bigModLogo from "../../../public/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="mb-6">
              <a href="https://bigmodtech.com/" target="_blank">
                <img className="w-[150px]" src={bigModLogo} alt="Bigmod Logo" />
              </a>
            </div>
            <address>
              <h4 className="text-xl font-bold mb-2">Office</h4>
              <p>
                Holding # 457, DIT Road, 3rd Floor, West Rampura, Dhaka-1219.
              </p>
            </address>
            <ul className="flex space-x-4 mt-4">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-red-400"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="hover:text-red-400"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  className="hover:text-red-400"
                >
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:text-red-400"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/service"
                  className="hover:text-red-400"
                >
                  Strategy & Research
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/service"
                  className="hover:text-red-400"
                >
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/service"
                  className="hover:text-red-400"
                >
                  Web Solution
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/service"
                  className="hover:text-red-400"
                >
                  Digital Marketing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/service"
                  className="hover:text-red-400"
                >
                  App Design
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/service"
                  className="hover:text-red-400"
                >
                  App Development
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/about"
                  className="hover:text-red-400"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/services"
                  className="hover:text-red-400"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/project"
                  className="hover:text-red-400"
                >
                  Project
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/blog"
                  className="hover:text-red-400"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/contact"
                  className="hover:text-red-400"
                >
                  Career
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://bigmodtech.com/services"
                  className="hover:text-red-400"
                >
                  Pricing Plan
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Contacts</h4>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="mr-3 text-red-500" />
              <div>
                <a
                  href="tel:+880255128071"
                  className="block hover:text-red-400"
                >
                  +880 255 128 071
                </a>
                <a
                  href="tel:+8801515620108"
                  className="block hover:text-red-400"
                >
                  +880 151 562 0108
                </a>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="mr-3 text-xl text-red-500" />
              <a
                href="mailto:info@bigmodtech.com"
                className="hover:text-red-400"
              >
                info@bigmodtech.com
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-2xl text-red-500" />
              <p>
                Holding # 457, DIT Road, 3rd Floor, West Rampura, Dhaka-1219.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-sm">
              <span>
                &copy; 2024 <b>Bigmod Technologies</b>
              </span>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-red-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-400">
                Terms of Use
              </a>
              <a href="#" className="hover:text-red-400">
                Support Policy
              </a>
              <a href="#" className="hover:text-red-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
