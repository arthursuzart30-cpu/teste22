import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import MenuShowcase from "./components/MenuShowcase";
import SocialProof from "./components/SocialProof";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";

export default function App() {
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", cartOpen);
  }, [cartOpen]);

  return (
    <div className="app">
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar cartCount={cart.itemCount} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <ProblemSolution />
        <MenuShowcase onAdd={cart.addItem} justAddedId={cart.justAddedId} />
        <SocialProof />
        <Process />
        <Pricing onAdd={cart.addItem} />
        <FinalCTA />
      </main>

      <Footer />

      <CartButton count={cart.itemCount} subtotal={cart.subtotal} onClick={() => setCartOpen(true)} />
      <Cart cart={cart} isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
