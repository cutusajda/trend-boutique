// Define the SubCategory and Category types
type SubCategory = {
  name: string;
  image: string;
};

type Category = {
  id: number;
  title: string;
  items: SubCategory[];
};

const CategoryContainer: React.FC<{
  title: string;
  categories: SubCategory[];
}> = ({ title, categories }) => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-semibold mb-5 text-neutral-100 bg-gray-700 p-2">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group cursor-pointer">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[30em] object-fit rounded-lg"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white font-semibold text-lg p-4 rounded-b-lg">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
