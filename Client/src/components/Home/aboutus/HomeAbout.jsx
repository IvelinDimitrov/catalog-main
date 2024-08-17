import { Link } from "react-router-dom";
export default function HomeAbout() {
  return (
    <section id="aboutus" className="py-16 bg-navi text-green-tx">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left column: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/procesService/eaceece24955f2a6d732b3f75e6635c1.jpg"
            alt="Image"
            className="w-full md:mx-auto md:max-w-md rounded-lg bg-gray-100 shadow-lg"
          />
        </div>
        {/* Right column: Title, description list, and button */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="my-5 text-white">
            At Our company, we follow a well-defined process to ensure the
            success of every project. Our approach is tailored to meet your
            unique requirements and deliver outstanding outcomes consistently.
          </p>
          <ol className="mt-5 mb-10 list-outside">
            <li className="flex items-center mb-4">
              <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                1
              </strong>
              <span className="text-white">
                We start by conducting a thorough analysis of your needs and
                goals.
              </span>
            </li>
            <li className="flex items-center mb-4">
              <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                2
              </strong>
              <span className="text-white">
                Our team collaborates closely with you to craft a customized
                strategy.
              </span>
            </li>
            <li className="flex items-center mb-4">
              <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                3
              </strong>
              <span className="text-white">
                We execute the plan meticulously, ensuring clear communication
                throughout the process.
              </span>
            </li>
            <li className="flex items-center mb-4">
              <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                4
              </strong>
              <span className="text-white">
                Regular updates and feedback sessions keep you informed and
                involved.
              </span>
            </li>
            <li className="flex items-center mb-4">
              <strong className="bg-primary text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">
                5
              </strong>
              <span className="text-white">
                We deliver the final product with precision, meeting your
                expectations and beyond.
              </span>
            </li>
          </ol>
          <Link to="/contacts">
            <button className="font-semibold px-4 py-2 rounded-full border-2 hover:bg-green-tx hover:text-navi transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
