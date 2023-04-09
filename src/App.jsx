import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Blogs } from "./pages/Blogs";
import { Update } from "./pages/Update";
function App() {
  return (
    <div className="App" id="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<h1>This Page Doesn't Exist Yet</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
