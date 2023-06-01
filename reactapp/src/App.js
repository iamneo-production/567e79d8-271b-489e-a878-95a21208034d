import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Website />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
