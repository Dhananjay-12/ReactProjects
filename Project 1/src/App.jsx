import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/mediaquery.scss";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
