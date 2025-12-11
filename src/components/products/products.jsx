import { useState } from "react";
import CategoryProducts from "./productcategory";
import './product.css'

export default function Products() {
  const [active, setActive] = useState("all"); // default to "all"

  const categories = [
    { key: "all", label: "All" },
    { key: "art", label: "Fine Art" },
    { key: "antiques", label: "Antiques" },
    { key: "collectibles", label: "Collectibles" },
    { key: "furniture", label: "Furniture" },
  ];

  return (
    <div>
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={active === cat.key ? "active-tab" : ""}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <CategoryProducts category={active} />
    </div>
  );
}
