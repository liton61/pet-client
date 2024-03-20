/* eslint-disable react/prop-types */


const CategoryCard = ({ pet }) => {
    const { image, name } = pet;
    return (
        <div>
            <div className="border flex justify-center">
            <div>
            <img src={image} alt="" />
            <h3 className="text-center font-medium pb-3">{name}</h3>
            </div>
            </div>
        </div>
    );
};

export default CategoryCard;