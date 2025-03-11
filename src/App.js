import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Options from "./pages/Options";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/options" element={<Options />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
