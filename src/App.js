import "./index.css";
import MainScreen from "./pages";
import { Home } from "./pages/Home";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./component/header";
import RestaurantMenu from './pages/RestaurantMenu'
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/restaurant/:id" element={ <RestaurantMenu/> }/>
      </Routes>
    </>
  </Router>
  );
}

export default App;
