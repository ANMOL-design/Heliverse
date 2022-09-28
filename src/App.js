import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//redux setup
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Import Files
import MyCards from "./component/myCards/MyCards";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MyCards />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
