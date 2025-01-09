import ProductCard from "../../components/ProductCard";
import { products } from "../../constants";

const PopularProduct = () => {
  return (
    <section className="px-8 py-12 sm:px-16 sm:py-24" id="products">
      <div className="mx-auto max-w-screen-wide">
        <h2 className="font-palanquin font-bold text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-5 lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-6 mt-16 max-sm:justify-items-center">
          {products.map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
