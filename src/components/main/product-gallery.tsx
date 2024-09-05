"use client";
import { useState } from "react";
import Image from "next/image";

export const ProductGallery = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "Regular Fit Long Sleeve Top",
      image: "/assets/images/model2.png",
      alt: "Product 1",
      price: "₹919.99",
      rating: 4.5,
      background: "bg-summergreen",
    },
    {
      id: 2,
      product_name: "Black Crop Tailored Jacket",
      image: "/assets/images/model3.png",
      alt: "Product 2",
      price: "₹924.99",
      rating: 4.2,
      background: "bg-turquoisegreen",
    },
    {
      id: 3,
      product_name: "Textured Sunset Shirt",
      image: "/assets/images/model4.png",
      alt: "Product 3",
      price: "₹929.99",
      rating: 4.7,
      background: "bg-nebula",
    }
  ]);

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="text-center min-h-80 w-full text-everglade content-center px-2">
          <h2 className="text-5xl md:text-6xl font-robotoSlab font-semibold">
            Best Selling
          </h2>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl">
            Get in on the trend with our curated selection of best-selling
            styles.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 m-4">
            {products.map((product) => (
              <div key={product.id} className="max-w-[40em] mb-8 md:mb-0">
                <div
                  className={`cursor-pointer ${product.background} 2xl:w-[30em]`}
                >
                  <Image
                    loading="lazy"
                    height={1000}
                    width={1000}
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-auto hover:drop-shadow-lg"
                  />
                </div>
                <div className="text-center mt-4 font-poppins">
                  <p className="font-semibold">{product.product_name}</p>
                  <div className="flex flex-nowrap justify-center gap-6 font-medium">
                    <span>{product.price}</span>
                    <span>|</span>
                    <span>{product.rating} ⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-28 flex justify-center items-center">
          <button className="btn btn-wide btn-outline border-everglade text-everglade rounded-none hover:bg-everglade fill-everglade hover:fill-white gap-0 font-poppins font-medium">
            See all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-10"
              viewBox="0 0 24 24"
            >
              <path
                d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                data-name="Right"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
