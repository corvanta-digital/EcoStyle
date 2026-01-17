import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./utils";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-neutral-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route
              path="*"
              element={
                <div className="p-20 text-center text-2xl font-bold text-red-600 bg-red-100 rounded">
                  <h1>404 Not Found</h1>
                  <p>This page does not exist.</p>
                  <Link to="/" className="text-blue-600 underline">
                    Go Home
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
