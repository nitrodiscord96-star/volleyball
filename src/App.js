import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Championships from "./pages/Championships";
import Feedbacks from "./pages/Feedbacks";
import History from "./pages/History";
import Basics from "./pages/Basics";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="championships" element={<Championships />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="history" element={<History />} />
          <Route path="basics" element={<Basics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;