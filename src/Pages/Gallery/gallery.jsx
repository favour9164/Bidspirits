import { useEffect, useState } from "react";
import './gallery.css'

function GalleryPage() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://692ec2ce91e00bafccd53326.mockapi.io/api/v1/productsApi");
      const data = await res.json();
      setItems(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error loading gallery:", err);
    }
  }

  function handleCategoryChange(e) {
    const value = e.target.value;
    setCategory(value);

    if (value === "all") {
      setFiltered(items);
      return;
    }

    const result = items.filter((item) => item.category === value);
    setFiltered(result);
  }

  return (
    <div className="gallery-wrapper">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Gallery</h1>
          <p>
            Explore fine art, antiques, collectibles, and exclusive curated
            pieces.
          </p>
          <button>Start Exploring</button>
        </div>
      </div>

      <div className="filter-box">
        <label>Search by:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All Category</option>
          <option value="art">Art</option>
          <option value="furniture">Furniture</option>
          <option value="collectibles">Collectibles</option>
          <option value="antiques">Antiques</option>
        </select>
      </div>

      <div className="grid-container">
        {filtered.map((item) => (
          <div className="grid-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <p className="title">{item.title}</p>
              <p className="category">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
