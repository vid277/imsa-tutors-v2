import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>{/* <Route path="courses" element="{<Home />}" /> */}</Routes>
    </div>
  );
}

export default App;
