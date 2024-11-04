import CategoryContainer from "@/components/categories/category-container";
import { Footer } from "@/components/footer/footer";

const categories = [
  {
    id: 1,
    title: "Style",
    items: [
      {
        name: "Casual Dresses",
        image: "https://m.media-amazon.com/images/I/81Qg+OHbk5L._SY741_.jpg",
      },
      {
        name: "Evening Dresses",
        image: "https://m.media-amazon.com/images/I/71ySy4ZhQxL._SX569_.jpg",
      },
      {
        name: "Maxi Dresses",
        image:
          "https://tigc.in/cdn/shop/files/compress_womens-pink-fit-and-flare-solid-partywear-cut-out-dress-0923-fhchdrs-7-a-bright-rose__2.jpg?v=1720713207&type=men",
      },
      {
        name: "Midi Dresses",
        image:
          "https://rukminim2.flixcart.com/image/640/768/xif0q/dress/o/j/g/xs-na-ttj6008159-tokyo-talkies-original-imagz5t7fmrgfdx4.jpeg?q=60&crop=false",
      },
      {
        name: "Mini Dresses",
        image:
          "https://getketchadmin.getketch.com/product/8905404536389/660/TTJ6006240_1.jpg",
      },
      {
        name: "Bodycon Dresses",
        image:
          "https://assets.ajio.com/medias/sys_master/root/20240925/yc47/66f422ef260f9c41e829136f/-473Wx593H-700476564-brown-MODEL.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Occasion",
    items: [
      {
        name: "Wedding Dresses",
        image: "https://m.media-amazon.com/images/I/81Qg+OHbk5L._SY741_.jpg",
      },
      {
        name: "Prom Dresses",
        image: "https://m.media-amazon.com/images/I/71ySy4ZhQxL._SX569_.jpg",
      },
      {
        name: "Party Dresses",
        image:
          "https://tigc.in/cdn/shop/files/compress_womens-pink-fit-and-flare-solid-partywear-cut-out-dress-0923-fhchdrs-7-a-bright-rose__2.jpg?v=1720713207&type=men",
      },
      {
        name: "Work Dresses",
        image:
          "https://rukminim2.flixcart.com/image/640/768/xif0q/dress/o/j/g/xs-na-ttj6008159-tokyo-talkies-original-imagz5t7fmrgfdx4.jpeg?q=60&crop=false",
      },
      {
        name: "Beach Dresses",
        image:
          "https://media.cupshe.com/cdn-review.cupshe.com/cmc-admin/product/20240306/e109dc2e0ad9873325a0bdafa11ca95f.jpg?speedsize=mxw_900",
      }
    ],
  },
];

const Categories = () => {
  return (
    <>
      <div className="px-4 md:px-20 my-4 md:my-10">
        {categories.map((category) => (
          <CategoryContainer key={category.id} title={category.title} categories={category.items} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Categories;
