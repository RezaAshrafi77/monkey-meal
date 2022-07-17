import "./App.scss";
// router
import Router from "./router";

function App() {
  return (
    <div className="app">
      <div className="h-screen w-screen flex flex-col bg-blue-100" >
        <Router />
      </div>
    </div>
  );
}

export default App;
