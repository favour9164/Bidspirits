import React, { useState, useEffect, useRef } from "react";
import './hero_section.css'

export default function HeroSection() {
  const images = [
    "/slider1.png",
    "/slider2.png",
    "/slider3.png",
    "/slider4.png",
  ];

  const [current, setCurrent] = useState(0);
  const hoverRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!hoverRef.current) {
          setCurrent((p) => (p + 1) % images.length);
        }
      }, 2000);
    };

    start();
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <section className="hero-wrap">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Crafted
            <br />
            <span className="accent">Collected</span>
            <br />
            Cherished
          </h1>

          <p className="hero-desc">
            Browse exclusive artworks, vintage furniture, and rare collectibles available
            for immediate purchase or secure bidding. Authenticity guaranteed, legacy assured.
          </p>

          <button className="cta">Start Collecting</button>
        </div>
        <div
          className="hero-right"
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          <div className="rot-square" aria-hidden />

          <div className="slider-card">
            <div className="image-frame">
              <img
                src={images[current]}
                alt={`slide-${current}`}
                className="main-image"
                draggable={false}
              />
            </div>

            <div className="thumbs">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`thumb-btn ${current === i ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`go to slide ${i + 1}`}
                >
                  <img src={src} alt={`thumb-${i}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
