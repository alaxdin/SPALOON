import "./App.css";
import NavBar from "./Components/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookNow from "./Pages/BookNow";
import Menu from "./Pages/Menu";
import Locations from "./Pages/Locations";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/BookNow" Component={BookNow}></Route>
        <Route path="/Menu" Component={Menu}></Route>
        <Route path="/Locations" Component={Locations}></Route>
      </Routes>
    </div>
  );
}
export default App;
