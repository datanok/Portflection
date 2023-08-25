const Home = () => {
  return (
    <section className="w-full flex flex-col mt-2 gap-4">
      <h1 className=" text-center text-4xl font-extrabold ">
        Empower Your Future <br className="md:hidden "></br>
        <span className="bg-gradient-to-r from-rose-600 via-pink-400 to-rose-600 bg-clip-text text-transparent">
          with Stunning Portfolios
        </span>
      </h1>
      <h3 className="text-center text-gray-700">
        Create, Showcase, and Succeed with PortfolioForge
      </h3>
      <div className="text-center">
        <button className="p-2 font-thin outline rounded-lg text-black bg-rose-400">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default Home;
