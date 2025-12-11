import { useEffect, useState } from "react";
import ProductSection from "./productSection";
import { groupProductsBySection } from "../../utils/groupProducts";

function CategoryProducts({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://692ec2ce91e00bafccd53326.mockapi.io/api/v1/productsApi")
      .then(res => res.json())
      .then(data => {
        let filtered;
        if (category === "all") {
          filtered = data; // show all products
        } else {
          filtered = data.filter(p => p.category === category);
        }
        setProducts(filtered);
      });
  }, [category]);

  const grouped = groupProductsBySection(products);

  return (
    <div>
      <ProductSection title="Popular Items" items={grouped.popular} />
      <ProductSection title="Upcoming Auctions" items={grouped.upcoming} />
      <ProductSection title="Sponsored Auctions" items={grouped.sponsored} />
      <ProductSection title="Completed Auctions" items={grouped.completed} />
    </div>
  );
}

export default CategoryProducts;
