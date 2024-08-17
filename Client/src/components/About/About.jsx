import React from "react";
import useScrollToTop from "../Handlerrs/useScrollToTop";

export function About() {
  useScrollToTop();
  return (
    <>
      <section
        id="hero"
        className="bg-background-color py-16 flex flex-col lg:flex-row items-center justify-center px-8"
      >
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-5/12 pb-7 lg:py-12 xl:w-5/12 lg:order-1 text-green-tx">
          <p className="mb-5 font-semibold  md:text-lg">
            Welcome to our platform
          </p>
          <h1 className="mb-10 text-4xl font-bold text-primary lg:w-4/5">
            Innovative creation for your dream vision
          </h1>
          <p className="mb-10 text-gray-txt lg:w-4/5">
            Discover a new way to create stunning furniture with our
            cutting-edge tools and resources. Let us help you bring your vision
            to life!
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="bg-primary 
          hover:bg-secondary 
          font-semibold 
          px-4 py-2 
          rounded-full 
          inline-block 
          border-2
           hover:text-navi
            hover:bg-green-tx
            transition ease-in-out 
            delay-150
            hover:-translate-y-1 
            hover:scale-110  
            duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="h-48 lg:h-auto overflow-hidden lg:order-2 lg:w-5/12 lg:px-8">
          {/* Adjust the src attribute with your actual image URL */}
          <img
            src="/images/catalog/49210dd441e6f05b6de36d1ad3994073.jpg"
            loading="lazy"
            alt="hero photo"
            className="h-full w-full object-cover object-center rounded-lg bg-gray-100 shadow-lg"
          />
        </div>
      </section>
      <section id="features" className="bg-navi text-green-tx">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Key Features
              </h2>
              <p className="text-lg text-grey-txt font-semibold">
                Discover what sets us apart
              </p>
            </div>
            {/* text - end */}
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
              {/* Feature 1 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <img
                    src="/images/features/hourglass.png"
                    alt="Feature Icon"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl text-primary">
                    Speed
                  </h3>
                  <p className="mb-2 text-gray-txt">
                    With our solution, experience lightning-fast completion for
                    your project.
                  </p>
                  <a
                    href="#"
                    className="font-bold text-gray-dark transition duration-100 hover:text-primary active:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Feature 1 End */}

              {/* Feature 2 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <img
                    src="/images/features/adaptation.png"
                    alt="Feature Icon"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl text-primary">
                    Flexibility
                  </h3>
                  <p className="mb-2 text-gray-txt">
                    Our solution provides unmatched flexibility, allowing you to
                    customize your order according to your needs.
                  </p>
                  <a
                    href="#"
                    className="font-bold text-gray-dark transition duration-100 hover:text-primary active:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Feature 2 End */}

              {/* Feature 3 */}
              {/* <div className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <img
                src="/images/features/3.svg"
                alt="Feature Icon"
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold md:text-xl text-primary">
                Security
              </h3>
              <p className="mb-2 text-gray-txt">
                Rest assured with top-notch security features that keep your
                website and data safe.
              </p>
              <a
                href="#"
                className="font-bold text-gray-dark transition duration-100 hover:text-primary active:text-primary"
              >
                Learn More
              </a>
            </div>
          </div> */}
              {/* Feature 3 End */}

              {/* Feature 4 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <img
                    src="/images/features/icons8-design-50.png"
                    alt="Feature Icon"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl text-primary">
                    Design
                  </h3>
                  <p className="mb-2 text-gray-txt">
                    At WoodHeaven, we design wood products with a blend of
                    traditional craftsmanship and modern innovation, ensuring
                    superior quality and sustainability. Our focus on precision,
                    durability, and aesthetics guarantees each piece exceeds
                    expectations.
                  </p>
                  <a
                    href="#"
                    className="font-bold text-gray-dark transition duration-100 hover:text-primary active:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Feature 4 End */}

              {/* Feature 5 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <img
                    src="/images/features/customer-service.png"
                    alt="Feature Icon"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl text-primary">
                    Customer Service 24/7
                  </h3>
                  <p className="mb-2 text-gray-txt">
                    're dedicated to addressing your needs promptly and
                    providing top-notch support to enhance your experience with
                    us.
                  </p>
                  <a
                    href="#"
                    className="font-bold text-gray-dark transition duration-100 hover:text-primary active:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Feature 5 End */}

              {/* Feature 6 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <img
                    src="/images/features/shield.png"
                    alt="Feature Icon"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl text-primary">
                    Reliability
                  </h3>
                  <p className="mb-2 text-gray-txt">
                    Count on our solution for reliable and quality materials.
                  </p>
                  <a
                    href="#"
                    className="font-bold text-gray-dark transition duration-100 hover:text-primary active:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Feature 6 End */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
