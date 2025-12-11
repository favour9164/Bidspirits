import { useState } from "react";
import "./product.css";

export default function ProductModal({ item, onClose }) {
  if (!item) return null;

  const [mainImage, setMainImage] = useState(item.image);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button 
          className="modal-close" 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-left">
            <img 
              src={mainImage} 
              alt={item.title} 
              className="modal-main-img" 
            />

            <div className="modal-gallery">
              {[item.image, ...(item.gallery || [])].map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  className={img === mainImage ? "active-thumb" : ""}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="modal-right">
            <h2>{item.title}</h2>

            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Section:</strong> {item.section}</p>
            <p><strong>Starting Price:</strong> ${item.basePrice}</p>
            <p><strong>Current Bid:</strong> ${item.currentBid}</p>

            <p className="modal-description"><strong>Description:</strong> {item.description}</p>
          </div>

        </div>

      </div>
    </div>
  );
}
