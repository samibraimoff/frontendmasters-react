import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WrappedDetails from "./Details";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <Router>
          <header>
            <Link to="/">Adapt me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />} />
            <Route exact path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
