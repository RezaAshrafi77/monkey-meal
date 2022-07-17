import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./views/Home";
import Splash from "./views/Splash";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/splash" exact element={<Splash />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
