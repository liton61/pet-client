import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import BestSelling from "../BestSelling/BestSelling";


const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
                <h1 className="text-3xl font-extrabold pb-5">Browse By Category</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {
                        category.map(category => <CategoryCard key={category._id} pet={category}></CategoryCard>)
                    }
                </div>
            </div>
            <BestSelling></BestSelling>
        </div>
    );
};

export default Category;