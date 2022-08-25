import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signIn" element={<h1>11111111</h1>}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
