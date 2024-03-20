import { useEffect, useState } from "react";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
        fetch('bestSelling.json')
            .then(res => res.json())
            .then(data => setBestSelling(data))
    }, []);

    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <h1 className="text-3xl font-extrabold pb-5">Best Selling Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {bestSelling.map(best => (
                    <BestSellingCard key={best._id} best={best} />
                ))}
            </div>
            <div className="flex justify-center pt-10">
            <div className="join">
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>
            </div>
        </div>
    );
};

export default BestSelling;
