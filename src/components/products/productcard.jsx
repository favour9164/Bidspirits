import { useEffect, useState } from "react";
import ProductModal from "./productModal";
import "./product.css";

function ProductCard({ item }) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date(item.endTime).getTime();
      const now = Date.now();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("Auction Ended");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [item.endTime]);

  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <div className="image-box">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="timer-box">
          <div className="t-block">
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>
          <div className="t-block">
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>
          <div className="t-block">
            <span>{timeLeft.mins}</span>
            <small>Mins</small>
          </div>
          <div className="t-block">
            <span>{timeLeft.secs}</span>
            <small>Secs</small>
          </div>
        </div>

        <div className="content">
          <h3>{item.title}</h3>

          <p className="category">Category: {item.category}</p>

          <div className="price-row">
            <span>Base price:</span>
            <p className="base-price">${item.basePrice}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <ProductModal item={item} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default ProductCard;
