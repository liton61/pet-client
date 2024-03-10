import Banner from "../../components/Banner/Banner";
import BestSelling from "../../components/BestSelling/BestSelling";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <BestSelling></BestSelling>
        </div>
    );
};

export default Home;