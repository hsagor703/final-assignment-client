import { Link } from "react-router";
import logo from "../../../assets/images/a-logo.png";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" width="40" height="100" />
              <p to="/" className="text-2xl font-bold text-[#9435E7]">
                AssetVerse
              </p>
            </Link>
            <p className="mt-2">
              © {new Date().getFullYear()} AssetVerse. All Rights Reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p>Email: support@assetverse.com</p>
            <p>Phone: +123 456 7890</p>

            {/* Social Media */}
            <div className="flex gap-4 mt-3">
              <a href="#" className="hover:text-white">
                Facebook
              </a>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/join-employee" className="hover:text-white">
                  Join as Employee
                </a>
              </li>
              <li>
                <a href="/join-hr" className="hover:text-white">
                  Join as HR Manager
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        Developed with ❤️ by AssetVerse Team
      </div>
    </footer>
  );
};

export default Footer;
