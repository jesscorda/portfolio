import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Projects } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-white relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
};

export default App;
