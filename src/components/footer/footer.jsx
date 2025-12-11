import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/logo.png";
import "./footer.css";
import Ticker from "../ticker/ticker";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#02041A", width: "100%", color: "white", paddingTop: "40px" }}>
      <div className="container-fluid py-4 footer-container">
        <div className="row gy-4 align-items-start">

          <div className="col-lg-4 col-md-6 col-12">
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
            <p className="mt-3" style={{ maxWidth: "250px", fontSize: "14px", lineHeight: "1.6" }}>
              BidSpirit connects buyers and sellers with secure, real-time, and transparent auctions.
              Trusted worldwide, it makes every bid simple and rewarding—a smarter, faster way to buy and sell.
            </p>

            <div className="d-flex gap-3 mt-3">
              <i className="bi bi-facebook" style={{ fontSize: "22px", cursor: "pointer" }}></i>
              <i className="bi bi-instagram" style={{ fontSize: "22px", cursor: "pointer" }}></i>
              <i className="bi bi-google" style={{ fontSize: "22px", cursor: "pointer" }}></i>
              <i className="bi bi-twitter" style={{ fontSize: "22px", cursor: "pointer" }}></i>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-12">
            <h6 style={{ color: "#00A37A", fontWeight: "700" }}>SITE MAP</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h6 style={{ color: "#00A37A", fontWeight: "700" }}>GALLERY</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li>Auction</li>
              <li>Popular Auction</li>
              <li>Community Feed</li>
              <li>Trending Artworks</li>
              <li>Curated Collections</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h6 style={{ color: "#00A37A", fontWeight: "700" }}>MARKETPLACE</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li>Trending Products</li>
              <li>Best Selling</li>
              <li>Latest Addition</li>
              <li>Commission Artists</li>
            </ul>
          </div>

        </div>
      </div>

      <div style={{ backgroundColor: "#010313", padding: "15px 0", marginTop: "30px" }}>
        <p className="text-center m-0" style={{ fontSize: "14px" }}>
          ©2025 BidSpirit. All rights reserved.
        </p>
      </div>
      <Ticker />
    </footer>
  );
}

export default Footer;
