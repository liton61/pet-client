/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const BestSellingCard = ({ best }) => {
    const { image, name, price, review, description } = best;
    return (
        <div>
            <div className="card card-compact border rounded-none">
                <figure><img className="lg:h-52 md:h-60" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <div>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="bg-orange-500 py-3 rounded text-white font-medium w-full">See Details <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingCard;