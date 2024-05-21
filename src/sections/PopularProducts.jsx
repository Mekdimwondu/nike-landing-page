import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";
function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our<span className="text-coral-red">Popular</span> Products
        </h2>
        <p>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of confort,design, and value{" "}
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-clos-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((item) => (
          <PopularProductsCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
