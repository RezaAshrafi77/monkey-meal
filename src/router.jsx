import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./views/Home";
import Splash from "./views/Splash";

export default function Router() {
  const [splash, setSplash] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={splash ? <Splash /> : <Home />} />
      </Routes>
    </BrowserRouter>
  );
}
