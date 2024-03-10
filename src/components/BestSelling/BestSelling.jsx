import { useEffect, useState } from "react";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
    const [bestSelling, setBestSelling] = useState([]);
    const [displayedCount, setDisplayedCount] = useState(6);

    useEffect(() => {
        fetch('bestSelling.json')
            .then(res => res.json())
            .then(data => setBestSelling(data))
    }, []);

    const handleShowAll = () => {
        setDisplayedCount(bestSelling.length);
    };

    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <h1 className="text-3xl font-extrabold pb-5">Best Selling Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {bestSelling.slice(0, displayedCount).map(best => (
                    <BestSellingCard key={best._id} best={best} />
                ))}
            </div>
            {displayedCount < bestSelling.length && (
                <div className="flex justify-center">
                    <button onClick={handleShowAll} className="btn btn-neutral rounded px-7 font-medium my-5">
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default BestSelling;
