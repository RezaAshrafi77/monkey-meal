import "./App.scss";
// router
import Router from "./router";

function App() {
  return (
    <div className="app">
      <div className="h-screen w-screen flex flex-col" >
        <Router />
      </div>
    </div>
  );
}

export default App;
