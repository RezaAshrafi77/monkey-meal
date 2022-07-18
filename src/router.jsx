import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./views/Home";
import Splash from "./views/Splash";
import Authentication from "./views/Authentication";

export default function Router() {
  const [splash, setSplash] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={splash ? <Splash /> : user ? <Home /> : <Authentication />}
        />
      </Routes>
    </BrowserRouter>
  );
}
