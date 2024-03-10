/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/nztSQKQ4/pet.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Be Happy With Your Pets !!!</h1>
                    <p className="mb-5 text-justify">Pets are animals that live with people for company and fun. They can be dogs, cats, birds, fish, or other animals. People like having pets because they make them happy and help them feel less stressed. Taking care of pets means giving them food, water, and love. It's important to be kind to pets and teach them how to behave nicely.</p>
                    <div className="join">
                        <input className="input input-bordered focus:outline-none join-item" placeholder="Search Your Pet" />
                        <button className="btn bg-orange-500 text-white join-item">Search <i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;