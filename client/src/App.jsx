import { useState } from "react";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import Transaction from "./components/Transaction";
import Footer from "./components/Footer";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Introduce />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
};

export default App;
