import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//redux setup
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Import Files
import MyCards from "./component/myCards/MyCards";
import MyTeam from "./component/MyTeam";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MyCards />} />
          <Route path="/my-team" element={<MyTeam />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
