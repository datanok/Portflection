const Home = () => {
  return (
    <section className="w-full flex flex-col mt-2 gap-4">
      <h1 className=" text-center text-4xl font-extrabold ">
        Empower Your Future <br className="md:hidden "></br>
        <span className="bg-gradient-to-r from-[rgba(220,216,252,255)] via-[rgba(252,143,128,255)] to-[rgba(248,147,229,255)] bg-clip-text text-transparent">
          with Stunning Portfolios
        </span>
      </h1>
      <h3 className="text-center text-gray-700">
        Create, Showcase, and Succeed with PortfolioForge
      </h3>
      <div className="text-center">
        <button className="p-2 rounded-lg text-black font-bold bg-gradient-to-r from-[rgba(220,216,252,255)] via-[rgba(252,143,128,255)] to-[rgba(248,147,229,255)]">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default Home;
