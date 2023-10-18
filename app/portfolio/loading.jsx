import { AiOutlineUser } from "react-icons/ai";

function loading() {
  return (
    <>
      <div className="grid grid-cols-3">
        {/* Navigation */}
        <nav className="w-full flex-col hidden md:flex md:sticky md:top-0 md:max-h-screen md:justify-between  md:flex-col  md:py-12">
          <section
            id="home"
            className=" w-full flex flex-col items-start lg:items-center gap-2"
          >
            <div className=" bg-gray-700 rounded-full animate-pulse p-2">
              <AiOutlineUser className="text-gray-500 " size={100} />
            </div>
            <span className="sr-only">Loading...</span>
            <div className="h-2 bg-gray-700 rounded-full "></div>
            <h1 className="lg:text-xl md:text-sm font-bold bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent"></h1>
          </section>
          <div className="flex flex-col gap-5 text-2xl md:mb-56 animate-pulse">
            <div className="h-2 bg-gray-700 w-[40%] rounded-full "></div>
            <div className="h-2 bg-gray-700 w-[40%]  rounded-full "></div>
            <div className="h-2 bg-gray-700 w-[40%]  rounded-full "></div>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="h-2 bg-gray-700 rounded-full "></div>
          </div>
        </nav>
        {/* Mobile view */}
        <div className=" col-span-3 md:col-span-2">
          <div className=" bg-gray-700 rounded-full animate-pulse w-fit p-2 mx-auto md:hidden">
            <AiOutlineUser className="text-gray-500 " size={100} />
          </div>
          <section className="w-full flex md:hidden flex-col items-center gap-2">
            <div className="h-2 bg-gray-700 rounded-full "></div>
            <div className="h-2 bg-gray-700 rounded-full "></div>
          </section>

          <div className="flex flex-col justify-center gap-8 " id="about">
            {/* About */}
            <section className="md:flex flex-col gap-2 mt-6 md:mt-40 md:h-screen md:py-12 slide-in">
              <h2 className="text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                About
              </h2>

              <div role="status" className=" animate-pulse">
                <div className="h-2.5 bg-gray-700 rounded-full mb-2.5 "></div>
                <div className="h-2 bg-gray-700 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-700 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-700 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-700 rounded-full "></div>
                <span className="sr-only">Loading...</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default loading;
