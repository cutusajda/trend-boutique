import Image from "next/image";

export const ProductOffer = () => {
  return (
    <>
      <div className="min-h-screen md:min-h-[60em] flex items-center">
        <div className="bg-jaggedIce w-full flex flex-col-reverse md:flex-row items-center p-4 pb-0">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-[35em] relative">
              <Image
                width={1000}
                height={1000}
                src={"/assets/images/model6.png"}
                alt=""
                className="relative w-full h-auto object-cover z-10"
              />
              <Image
                width={150}
                height={150}
                src={"/assets/images/dots.png"}
                alt=""
                className="absolute bottom-10 -left-10 md:-left-20 max-w-[6em] md:max-w-80 w-auto h-auto"
              />
              <div className="w-36 h-32 md:w-48 md:h-44 bg-whiteIce absolute bottom-16 opacity-50"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col h-full justify-center">
            <h1 className="font-robotoSlab font-bold text-5xl text-everglade my-4">
              Exclusive offer
            </h1>
            <p className="font-poppins font-medium text-md md:text-xl text-justify md:w-1/2">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>
            <div className="flex gap-4 my-4 md:my-8 text-center text-everglade font-semibold font-poppins">
              <div className="flex flex-col justify-center bg-white w-1/3 md:w-20 h-16">
                <span>06</span>
                <span>Days</span>
              </div>
              <div className="flex flex-col justify-center bg-white w-1/3 md:w-20 h-16">
                <span>18</span>
                <span>Hours</span>
              </div>
              <div className="flex flex-col justify-center bg-white w-1/3 md:w-20 h-16">
                <span>48</span>
                <span>Min</span>
              </div>
            </div>
            <div className="w-full md:max-w-[17em]">
              <button className="btn w-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
