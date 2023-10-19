"use client";
import Image from "next/image";
import { GiBrain, GiPriceTag } from "react-icons/gi";
import { BiShareAlt, BiCustomize } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import { useState, useEffect } from "react";
import { Expletus_Sans } from "next/font/google";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { GrUpdate } from "react-icons/gr";
import HeroImg from "@public/assets/images/homepage.gif";
import logo from "@public/assets/images/rlogo.svg";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const ExpletusSans = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // style: ["italic", "normal"],
});
const Home = () => {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4">
        <section className="w-full flex flex-col mt-4 gap-4">
          <h1 className=" text-center text-4xl font-extrabold ">
            Empower Your Future <br className="md:hidden "></br>
            <span className="bg-gradient-to-br from-red-500 via-pink-300 to-red-500 bg-clip-text text-transparent">
              with Stunning Portfolios
            </span>
          </h1>
          <h3 className="text-center text-gray-700 w-96 mx-auto">
            Take control of your personal brand and career opportunities with a
            personalized online portfolio.
          </h3>
          <div className="text-center">
            {session ? (
              <></>
            ) : (
              <button className="p-2 rounded-lg text-white font-bold bg-red-500">
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      Get Started Now
                    </button>
                  ))}
              </button>
            )}
          </div>
        </section>
        <div className="mx-auto rounded-full mt-8 w-4/5 md:w-3/5">
          <Image
            src={HeroImg}
            alt="Portfolio Showcase"
            className="rounded-lg mx-auto"
          />
          <h3 className="text-center font-bold italic mt-2">
            Showcase Your Skills
          </h3>
          <h4 className="text-gray-700 text-center ">
            Craft compelling portfolios that captivate, inspire, and open doors
            to endless opportunities."
          </h4>
        </div>
        <section className="p-8 bg-slate-100">
          <h1 className="text-center my-4 font-black">
            Why Choose Our Portfolio Builder
          </h1>
          <div className="grid w-full md:w-3/5 mx-auto grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col bg-slate-200 p-2 outline rounded-lg">
              <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                <GiBrain size={24} />
              </span>

              <h1 className="mt-2 text-slate-800 font-semibold">
                Stunning Portfolios
              </h1>

              <p className=" text-sm text-slate-700">
                Create stunning portfolios effortlessly with our intuitive tools
                and professionally designed templates. Showcase your work in a
                way that captivates and inspires.
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2 outline rounded-lg">
              <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                <BiShareAlt size={24} />
              </span>

              <h1 className="mt-2 text-slate-800 font-semibold">
                Easy Sharing
              </h1>

              <p className=" text-sm text-slate-700">
                Share your portfolio with a simple link. Say goodbye to the
                complexities of hosting and setup. Get your work in front of
                your audience quickly.
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2 outline rounded-lg">
              <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                <MdDevices size={24} />
              </span>

              <h1 className="mt-2 text-slate-800 font-semibold">
                Responsive Design
              </h1>

              <p className=" text-sm text-slate-700">
                Your portfolio looks great on all devices, ensuring that you
                reach a wide audience. Whether on a desktop, tablet, or phone,
                your work shines.
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2 outline rounded-lg">
              <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                <BiCustomize size={24} />
              </span>

              <h1 className="mt-2 text-slate-800 font-semibold">
                Effortless Customization
              </h1>

              <p className=" text-sm text-slate-700">
                Tailor your portfolio to your unique style with our
                drag-and-drop simplicity. No coding skills are required, giving
                you the freedom to express your creativity.
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2 outline rounded-lg">
              <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                <GiPriceTag size={24} />
              </span>

              <h1 className="mt-2 text-slate-800 font-semibold">
                Affordability
              </h1>

              <p className=" text-sm text-slate-700">
                Our platform offers outstanding value without breaking the bank.
                It's an affordable choice for students, freelancers, and
                professionals.It's totaly Free!!
              </p>
            </div>
            <div className="flex flex-col bg-slate-200 p-2 outline rounded-lg">
              <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                <GrUpdate size={24} />
              </span>

              <h1 className="mt-2 text-slate-800 font-semibold">
                Continuous Updates
              </h1>

              <p className=" text-sm text-slate-700">
                We're committed to providing the latest tools and features,
                keeping your portfolio up-to-date with the ever-evolving web.
                Stay at the forefront of technology and design.
              </p>
            </div>
          </div>
        </section>
        <footer className="bg-white ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="https://portflection.vercel.app/"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Image
                  src={logo}
                  className="object-contain mr-2"
                  width={24}
                  height={24}
                  alt="Flowbite Logo"
                />
                <p
                  className={
                    ExpletusSans.className +
                    "self-center whitespace-nowrap text-lg md:flex font-extrabold"
                  }
                >
                  PortFlection
                </p>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                <li>
                  <a
                    href="https://github.com/datanok"
                    target="_blank"
                    className="hover:text-slate-800"
                  >
                    <AiFillGithub size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tanmayok/"
                    target="_blank"
                    className="hover:text-slate-800"
                  >
                    <AiFillInstagram size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tanmaypatil25/"
                    target="_blank"
                    className="hover:text-slate-800"
                  >
                    <AiFillLinkedin size={24} />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">
              Created with &hearts; By
              <a
                href="http://github.com/datanok"
                target="_blank"
                className="hover:text-gray-700"
              >
                Tanmay
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
