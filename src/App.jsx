import "./App.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
