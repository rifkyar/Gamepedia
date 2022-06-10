import logo from '../logo.svg';
import '../App.css';
import { Container } from 'react-bootstrap';
import NavigationBar from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import '../css/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import Carose from '../components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NewReal from '../components/NewRealese';
import Footers from '../components/Footer';
import '../css/styles.css';
const Home = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Carose />
            </div>
            <div>
                <NewReal />
            </div>
            <div>
                <Footers />
            </div>
        </>
    )
}
export default Home;