import { Link } from "react-router-dom";
export default function () {
  return (
    <footer className="border-t border-gray-line  bg-navi text-green-tx">
      {/* Top part */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap -mx-4">
          {/* Menu 1 */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul>
              <li className="pb-2">
               <Link
                to="/"
                className="hover:text-testing"
              >
                Home
              </Link>
              </li>
              <li className="pb-2">
              <Link
                to="/catalog"
                className="hover:text-testing"
              >
                Catalog
              </Link>
              </li>
              <li className="pb-2">
              <Link
                to="/catalog"
                className="hover:text-testing "
              >
                Team
              </Link>
              </li>
              <li className="pb-2">
              <Link
                to="/about"
                className="hover:text-testing "
              >
                About
              </Link>
              </li>
              <li>
              <Link
                to="/contacts"
                className="hover:text-testing "
              >
                Contact us
              </Link>
              </li>
            </ul>
          </div>
          {/* Menu 3 */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul>
            <li className="pb-2">
              <Link
                to="/register"
                className="hover:text-testing "
              >
                Register
              </Link>
              </li>
              <li className="pb-2">
              <Link
                to="/logIn"
                className="hover:text-testing "
              >
                LogIn
              </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <img
                  src="/images/social/facebook.png"
                  alt="Facebook"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Facebook
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/images/social/twitter.png"
                  alt="Twitter"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Twitter
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/images/social/instagram.png"
                  alt="Instagram"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Instagram
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/images/social/pinterest.png"
                  alt="Pinterest"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  Pinterest
                </a>
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/images/social/youtube.png"
                  alt="Youtube"
                  className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                />
                <a href="#" className="hover:text-testing">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full sm:w-2/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              <img
                src="/images/log/logo-no-background.png"
                alt="Logo"
                className="h-[60px] mb-4"
              />
            </p>
            <p>123 Street Name, Sofia, Bulgaria</p>
            <p className="text-xl font-bold my-4">Phone: (123) 456-7890</p>
            <a href="mailto:info@company.com" className="underline">
              Email: WoodHeaven@company.com
            </a>
          </div>
        </div>
      </div>
      {/* Bottom part */}
      <div className="py-6 border-t border-gray-line">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* Copyright and Links */}
          <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
            <p className="mb-2 font-bold">
              © 2024 WoodHeaven. All rights reserved.
            </p>
            <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
              <li>
                <a href="#" className="hover:text-testing">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-testing">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-testing">
                  FAQ
                </a>
              </li>
            </ul>
            <p className="text-sm mt-4">
            Discover premium quality wood and handcrafted wooden furniture at WoodHeaven. From sustainable timber to custom pieces, we bring the warmth of nature into your home. Explore our collection and find the perfect addition to your space.
            </p>
          </div>
        
        </div>
      </div>
    </footer>
  );
}
