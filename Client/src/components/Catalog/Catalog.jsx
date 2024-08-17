import { useEffect, useState } from "react";

import useScrollToTop from "../Handlerrs/useScrollToTop";

import catalogApi from "../../api/catalog-api";

import ProductTemplate from "./ProductTemplate/ProductTemplate";
import { useGetAllItems } from "../../hooks/useItems";

export default function Catalog() {
  useScrollToTop();
  const [items] = useGetAllItems();
  return (
    <>
      {/* Shop */}
      <section id="shop" className="bg-background-color ">
        <div className="container mx-auto ">
        
          <div className="flex flex-col md:flex-row">
            {/* Products List */}
            <div className="w-full md:w-3/4 p-4">
              {/* Products grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <ProductTemplate key={item._id} {...item} />
                  ))
                ) : (
                  <div className="text-background-color font-bold flex justify-center">
                    <p>No Items Added</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
//!SEARCH BAR
{
  /* <div className="  top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search for products..."
        />
      </div> */
}
//!PAGINATION
{
  /* <div className="flex justify-center mt-8">
                <nav aria-label="Page navigation">
                  <ul className="inline-flex space-x-2">
                    <li>
                      <a
                        href="#"
                        className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */
}
//! DOPULNITELNA INFORMACIQ KUM SHOPA
{
  /* Shop category description
      <section id="shop-category-description" className="py-8">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Shirts Category</h2>
            <p className="mb-4">
              Discover our wide range of shirts, perfect for any occasion.
              Whether you're looking for something casual or formal, we have the
              perfect shirt for you. Our collection includes a variety of
              styles, colors, and sizes to suit everyone's taste.
            </p>
            <p>
              Browse through our selection and find your new favorite shirt
              today. All our shirts are made from high-quality materials and are
              designed to provide both comfort and style. Shop now and elevate
              your wardrobe with our premium shirts.
            </p>
          </div>
        </div>
      </section> */
}
//! FILTRI
{
  /* Top Filter */
}
{
  /* <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none">
                Show On Sale
              </button>
              <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none">
                List View
              </button>
              <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none">
                Grid View
              </button>
            </div>
            <div className="flex mt-5 md:mt-0 space-x-4">
              <div className="relative">
                <select className="block appearance-none w-full bg-white border  hover:border-primary px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Sort by Latest</option>
                  <option>Sort by Popularity</option>
                  <option>Sort by A-Z</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-2">
                  <img
                    id="arrow-down"
                    className="h-4 w-4"
                    src="/assets/images/filter-down-arrow.svg"
                    alt="filter arrow"
                  />
                  <img
                    id="arrow-up"
                    className="h-4 w-4 hidden"
                    src="/assets/images/filter-up-arrow.svg"
                    alt="filter arrow"
                  />
                </div>
              </div>
            </div>
          </div> */
}
