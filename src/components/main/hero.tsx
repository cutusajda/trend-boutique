import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="h-24 md:h-16 bg-jaggedIce"></div>
      <section className="bg-jaggedIce min-h-svh h-svh w-full">
        <div className="h-full w-full flex-col-reverse md:flex-row flex items-center justify-end md:justify-center md:px-12">
          <div className="w-full md:w-2/4 flex flex-col items-center h-1/2 justify-center">
            <div className="w-3/4 md:w-full">
              <div className="font-rufina text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium text-everglade text-nowrap">
                <p>Discover and</p>
                <p>Find Your Own</p>
                <p>Fashion!</p>
              </div>
              <div className="mt-2 md:mt-4 text-sm md:text-base lg:text-xl 2xl:text-2xl md:w-3/4 text-darkSpringGreen leading-loose">
                <p>
                  Explore our curated collection of stylish clothing and
                  accessories tailored to your unique taste.
                </p>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-12 text-center md:text-start">
                <button
                  className="btn w-full md:w-3/6 py-4 lg:py-8 bg-everglade text-sm lg:text-xl text-white hover:bg-darkSpringGreen 
                                content-center"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/4 h-72 md:min-h-[35em] 2xl:min-h-[45em] flex flex-col items-center md:items-end">
            <div className="relative w-3/4 min-w-52 sm:min-w-80 lg:min-w-72 h-full border bg-softgreen rounded-[80px] rounded-tr-3xl md:my-20 lg:my-0">
              <Image
                src={"/assets/images/dots.png"}
                width={150}
                height={150}
                alt=""
                className="absolute right-0 md:right-4 top-10 md:top-40 scale-75 md:scale-100 w-auto h-auto"
              />
              <Image
                src={"/assets/images/dots.png"}
                width={150}
                height={150}
                alt=""
                className="absolute left-0 md:left-4 bottom-10 md:bottom-40 scale-75 md:scale-100 w-auto h-auto"
              />
              <Image
                priority
                src={"/assets/images/model1.png"}
                width={1000}
                height={1000}
                alt={""}
                className="absolute object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
