

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/1tGpryPT/dogs.webp)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Be Happy With Your Dogs !</h1>
                    <p className="mb-5">A dog is a friendly animal that many people keep as a pet. They come in different sizes, shapes, and colors. Some are small, like Chihuahuas, while others are big, like Great Danes.</p>
                    <button className="bg-orange-500 px-7 py-3 rounded font-bold">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;