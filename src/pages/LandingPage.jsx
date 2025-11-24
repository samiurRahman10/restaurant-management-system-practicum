import Header from '../components/home/layout/Header';
import Hero from '../components/home/landing/Hero';
import Features from '../components/home/landing/Features';
import FeaturedDishes from '../components/home/landing/FeaturedDishes';
import VisitUs from '../components/home/landing/VisitUs';
import Footer from '../components/home/layout/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <Hero />
      <Features />
      <FeaturedDishes />
      <VisitUs />
      <Footer />
    </div>
  );
};

export default LandingPage;