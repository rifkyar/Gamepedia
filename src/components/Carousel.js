import { Carousel } from 'react-responsive-carousel';
import car1 from "../assets/car01.jpg";
import car2 from "../assets/car02.jpg";
import car3 from "../assets/car03.png";
const Carose = () => {
    return (
        <>
            <div className='TrendingText'>
                Trending Now
            </div>
            <Carousel>
                <div>
                    <img src={car1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={car2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={car3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    )
}
export default Carose