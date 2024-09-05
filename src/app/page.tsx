import { Hero } from "@/components/main/hero";
import { Footer } from "@/components/footer/footer";
import { ProductOffer } from "@/components/main/product-offer";
import { SoftCategory } from "@/components/main/soft-category";
import { ProductGallery } from "@/components/main/product-gallery";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <Hero />
        <ProductGallery />
        <ProductOffer />
        <SoftCategory />
        <Footer />
      </div>
    </>
  );
}

export default Home;
