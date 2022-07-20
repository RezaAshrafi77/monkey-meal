import "./App.scss";
// router
import Router from "./router";

function App() {
  return (
    <div className="app">
      <div className="h-screen w-screen overflow-x-hidden flex flex-col bg-background" >
        <Router />
      </div>
    </div>
  );
}

export default App;
