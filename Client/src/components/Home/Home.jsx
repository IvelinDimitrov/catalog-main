import { Link } from "react-router-dom";
import HomeAbout from "./aboutus/HomeAbout";
import HomeClients from "./clients/HomeClients";
import DiscoverServices from "./discoverservices/DiscoverServices";
import useScrollToTop from "../Handlerrs/useScrollToTop";
import Catalog from "../Catalog/Catalog";

export default function Home() {
  useScrollToTop();
  return (
    <>
      <section id="home" className="bg-background-color py-16 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left column: Description and buttons */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-4 text-green-tx">
              Wood <span>Heaven</span>
            </h2>
            <p className="my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              suscipit minima blanditiis voluptatem quam numquam voluptates
              animi velit exercitationem esse impedit doloribus maiores vero
              sequi dolor, aliquid omnis illum eligendi?
            </p>
            <div className="space-x-2">
              <Link
                to="/catalog"
                className="font-semibold px-4 py-2 rounded-full inline-block border-2 border-green-tx hover:bg-green-tx hover:text-navi text-green-tx transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 "
              >
                {" "}
                Catalog
              </Link>
            </div>
          </div>
          {/* Right column: Responsive image */}
          <div className="md:w-1/2">
            <img
              src="/images/catalog/6b2071c7641805f85d80bbf670528194.jpg"
              alt="Image"
              className="w-full md:mx-auto md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <HomeAbout />
      <DiscoverServices />
      <HomeClients />
    </>
  );
}
