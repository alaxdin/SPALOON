import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookNow from "./Pages/BookNow";
import offers from "./Pages/offers";
import Locations from "./Pages/Locations";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/BookNow" Component={BookNow}></Route>
        <Route path="/offers" Component={offers}></Route>
        <Route path="/Locations" Component={Locations}></Route>
      </Routes>
    </div>
  );
}
export default App;
