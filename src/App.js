import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import About from "./Components/About/About";
import UserDetails from "./Components/User/UserDetails";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/usersdetails/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
