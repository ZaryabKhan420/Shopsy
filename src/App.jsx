import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Header,
  Hero,
  Product,
  BestProducts,
  Sale,
  Subscribe,
  Testimonials,
  Footer,
  PopUp,
} from "./components/index";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      delay: 100,
      duration: 800,
      easing: "ease-in-sine",
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <Header handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Product />
      <BestProducts handleOrderPopup={handleOrderPopup} />
      <Sale />
      <Subscribe />
      <Product />
      <Testimonials />
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
