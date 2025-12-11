import ProductCard from "./productcard";
import './product.css'

function ProductSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="section">
      <h2 className="heading">{title}</h2>

      <div className="products-container">
        {items.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
