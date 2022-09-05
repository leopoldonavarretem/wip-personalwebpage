//Imports
import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";

//Component imports
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {routes().map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
