import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './css/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import Carose from './components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NewReal from './components/NewRealese';
import Footers from './components/Footer';
import Home from './pages/home';
import Shop from './pages/shop';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <div >
            <div>
              <NavigationBar />
            </div>
            <div>
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/shop' element={<Shop />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>

  )
}

export default App;
