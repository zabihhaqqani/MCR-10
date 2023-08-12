import './App.css'

import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App
