import Banner from "../../components/Banner/Banner";
import BestSelling from "../../components/BestSelling/BestSelling";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <BestSelling></BestSelling>
            <Category></Category>
        </div>
    );
};

export default Home;