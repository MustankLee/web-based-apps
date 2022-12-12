import "./App.css";
import NavBar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import AddDataPage from "./components/AddMenu.js";
import EditDataPage from "./components/EditMenu.js";
import DetailDataPage from "./components/DetailData.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/add_menu" element={<AddDataPage />}></Route>
          <Route exact path="/edit_menu" element={<EditDataPage />}></Route>
          <Route exact path="/detail_menu" element={<DetailDataPage />}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
