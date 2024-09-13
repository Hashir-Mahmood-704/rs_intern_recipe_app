const HomeBanner = () => {

    return <section className="h-[90vh] banner w-screen bg-cover bg-center flex justify-center items-center flex-col gap-[40px]">
        <div className="mt-[80px]">
            <h1 className="text-[40px] sm:text-[62px] font-bold text-white leading-tight">Your Daily
                <span className="text-orange-500"> Dish</span>
            </h1>
            <h1 className="text-[40px] sm:text-[62px] font-bold text-white leading-tight">A
                <span className="text-orange-500"> Food </span>
                 Journey
            </h1>
        </div>
        <p className="w-[300px] sm:w-[500px] md:w-[700px] text-[18px] sm:text-[22px] text-white text-center">Discover a world of flavors with our delicious and easy-to-follow recipes! Whether you are a beginner or a seasoned chef, our collection offers something for everyone. From quick meals to gourmet dishes, explore new tastes
            and create unforgettable moments in your kitchen!</p>
        <button className="flex text-[20px] font-semibold text-white bg-orange-500 px-[15px] py-[8px] rounded-[10px] ">Explore</button>
    </section>
}

export default HomeBanner