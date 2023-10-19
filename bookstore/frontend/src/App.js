import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
