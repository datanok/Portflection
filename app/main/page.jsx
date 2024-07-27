"use client";
import Image from "next/image";
import { GiBrain, GiPriceTag } from "react-icons/gi";
import { BiShareAlt, BiCustomize } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import { useSession, getProviders } from "next-auth/react";
import { GrUpdate } from "react-icons/gr";
import HeroImg from "@public/assets/images/hero.gif";
import newLogo from "@public/assets/images/logoo.png";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { setDialog, setProviders } from "@components/redux/Action";
import { connect } from "react-redux";
import Dialog from "@components/Dialog";
import Loader from "@components/Loader/Loader";
import ProfileDialog from "@components/ProfileDialog";
import AlertManager from "@components/AlertManager";

const ExpletusSans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Home = (props) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      props.setProviders(response);
    };
    setUpProviders();
  }, []);

  const featureList = [
    {
      icon: <GiBrain size={24} />,
      title: "Stunning Portfolios",
      description:
        "Create stunning portfolios effortlessly with our intuitive tools and professionally designed templates. Showcase your work in a way that captivates and inspires.",
    },
    {
      icon: <BiShareAlt size={24} />,
      title: "Easy Sharing",
      description:
        "Share your portfolio with a simple link. Say goodbye to the complexities of hosting and setup. Get your work in front of your audience quickly.",
    },
    {
      icon: <MdDevices size={24} />,
      title: "Responsive Design",
      description:
        "Your portfolio looks great on all devices, ensuring that you reach a wide audience. Whether on a desktop, tablet, or phone, your work shines.",
    },
    {
      icon: <BiCustomize size={24} />,
      title: "Effortless Customization",
      description:
        "Tailor your portfolio to your unique style with our drag-and-drop simplicity. No coding skills are required, giving you the freedom to express your creativity.",
    },
    {
      icon: <GiPriceTag size={24} />,
      title: "Affordability",
      description:
        "Our platform offers outstanding value without breaking the bank. It's an affordable choice for students, freelancers, and professionals. It's totally Free!",
    },
    {
      icon: <GrUpdate size={24} />,
      title: "Continuous Updates",
      description:
        "We're committed to providing the latest tools and features, keeping your portfolio up-to-date with the ever-evolving web. Stay at the forefront of technology and design.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        <section className="w-full flex flex-col mt-4 gap-4">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold">
            Empower Your Future <br className="md:hidden"></br>
            <span className="animate-pulse bg-gradient-to-br from-red-500 via-pink-400 to-red-500 bg-clip-text text-transparent">
              with Stunning Portfolios
            </span>
          </h1>
          <h3 className="text-center text-gray-700 w-96 mx-auto">
            Take control of your personal brand and career opportunities with a
            personalized online portfolio.
          </h3>
          <div className="text-center">
            {session && Object.keys(session).length > 0 ? (
              <></>
            ) : (
              <button
                className="bg-red-500 rounded-xl p-2 text-white"
                onClick={() => props.setDialog(true)}
              >
                Get Started
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
          <h4 className="text-gray-700 text-center">
            Craft compelling portfolios that captivate, inspire, and open doors
            to endless opportunities.
          </h4>
        </div>
        <section className="p-8 bg-slate-100">
          <h2 className="text-center my-4 font-black">
            Why Choose Our Portfolio Builder
          </h2>
          <div className="grid w-full md:w-3/5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-slate-200 p-2 outline rounded-lg"
              >
                <span className="bg-gray-300 w-fit p-2 rounded-full outline">
                  {item.icon}
                </span>
                <h2 className="mt-2 text-slate-800 font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="bg-white">
          <div className="w-full mx-auto p-4">
            <div className="flex align-start justify-between">
              <a
                href="https://portflection.vercel.app/"
                className="flex items-center sm:mb-0"
              >
                <Image
                  src={newLogo}
                  className="object-contain mr-2"
                  width={24}
                  height={24}
                  alt="Portflection"
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
                {[
                  {
                    href: "https://github.com/datanok",
                    icon: <AiFillGithub size={24} />,
                  },
                  {
                    href: "https://www.instagram.com/tanmayok/",
                    icon: <AiFillInstagram size={24} />,
                  },
                  {
                    href: "https://www.linkedin.com/in/tanmaypatil25/",
                    icon: <AiFillLinkedin size={24} />,
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      className="hover:text-slate-800"
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-3 border-gray-300 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 text-center">
              Created with &hearts; By
              <a
                href="http://github.com/datanok"
                target="_blank"
                className="hover:text-red-700"
              >
                Tanmay
              </a>
            </span>
          </div>
        </footer>
      </div>
      <AlertManager />
      {props.showDialog && <Dialog />}
      {props.showProfileDialog && <ProfileDialog />}
      {(status === "loading" || props.loading === true) && <Loader />}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  providers: state.providers,
  showDialog: state.showDialog,
  showProfileDialog: state.showProfileDialog,
});

const mapDispatchToProps = {
  setProviders,
  setDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
