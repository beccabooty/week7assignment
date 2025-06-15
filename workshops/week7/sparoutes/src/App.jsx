import { Routes, Route, BrowserRouter, Link } from "react-router";
import About from "./components/About";
import { NotFound } from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App</h1>
        <Link to="/about">About</Link>
        <Routes>
          <Route path={"/about"} element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
