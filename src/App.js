import "./index.css";
import Home from "./pages";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from "./pages/dasboard";
import Header from "./component/header";
import RestaurantMenu from './pages/RestaurantMenu'
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/restaurant/:id" element={ <RestaurantMenu/> }/>
      </Routes>
    </>
  </Router>
  );
}

export default App;
