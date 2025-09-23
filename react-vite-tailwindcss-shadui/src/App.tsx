import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import { NavLink } from "react-router";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/second"
            element={
              <>
                123{" "}
                <NavLink to="/" end>
                  back
                </NavLink>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
