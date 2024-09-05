"use client";
import { useState } from "react";
import Image from "next/image";

export const SoftCategory = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/assets/images/model7.png",
      alt: "Product 1",
      title: "Accessories",
      description: "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
      background: "bg-summergreen",
    },
    {
      id: 2,
      image: "/assets/images/model8.png",
      alt: "Product 2",
      title: "Dresses",
      description: "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
      background: "bg-turquoisegreen",
    },
    {
      id: 3,
      image: "/assets/images/model9.png",
      alt: "Product 3",
      title: "Outerwear",
      description: "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
      background: "bg-nebula",
    },
  ]);

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="text-center text-everglade min-h-80 md:min-h-48 flex flex-col justify-center md:justify-start px-4">
          <h2 className="text-4xl md:text-6xl font-robotoSlab font-semibold">Designer Clothes For You</h2>
          <p className="mt-6 text-base md:text-xl lg:text-2xl">
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 m-4">
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
                <div className="mt-4 font-poppins flex flex-col items-center">
                  <p className="font-semibold text-xl">{product.title}</p>
                  <div className="flex flex-nowrap justify-center gap-0 md:gap-6 font-medium max-w-56 md:max-w-max  2xl:w-[30em] text-center">
                    <p className="line-clamp-3 text-xs md:text-lg">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
