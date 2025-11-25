import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedbacks from "./pages/Feedbacks";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="feedbacks" element={<Feedbacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;