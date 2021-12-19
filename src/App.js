import "./App.css";
import AddBlog from "./pages/AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/add-blog" element={<AddBlog />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
