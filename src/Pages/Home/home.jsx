import FeedbackForm from "../../components/feedbackForm/feedbackForm"
import HeroSection from "../../components/hero/hero_section"
import Products from "../../components/products/products"


function Home() {
  return (
    <div style={{background: 'rgba(23, 125, 115, 0.35)'}}>
      <div>
        <HeroSection />
        <Products />
        <FeedbackForm />
      </div>
    </div>
  )
}

export default Home
