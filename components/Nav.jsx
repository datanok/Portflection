"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Expletus_Sans } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@public/assets/images/rlogo.svg";
import { connect } from "react-redux";
import { getPortfolio, setDialog } from "../components/redux/Action";

const ExpletusSans = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // style: ["italic", "normal"],
});

const Nav = (props) => {
  const { portfolioData, loading } = props;
  const [toggle, setToggle] = useState(false);
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (session && !props.portfolioData) {
      props.getPortfolio(session.user.id);
    }
  }, [session]);

  return (
    <nav className="flex flex-row justify-between p-3 w-full mb-6">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={logo}
          className="object-contain"
          width={30}
          height={30}
          alt="Portflection"
        />
        <p
          className={
            ExpletusSans.className + " text-lg hidden md:flex font-extrabold"
          }
        >
          Portflection
        </p>
      </Link>

      {/* DESKTOP Navigation*/}
      <div className="hidden md:flex">
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/">Home</Link>
          {status === "loading" ? (
            <div className="h-[50%] bg-gray-300 rounded-full w-16 animate-pulse"></div>
          ) : (
            status === "authenticated" && (
              <>
                {props.portfolioData &&
                props.portfolioData.hasOwnProperty("success") &&
                !(props.portfolioData.success === false) ? (
                  <>
                    <Link href={`/portfolio/view?id=${session.user.id}`}>
                      View
                    </Link>
                    <Link href={`/main/edit?id=${session.user.id}`}>Edit</Link>
                  </>
                ) : (
                  <Link href="/main/createportfolio">Create</Link>
                )}
              </>
            )
          )}

          {session?.user ? (
            <>
              <div className="relative inline-block text-left">
                <img
                  src={session?.user.image}
                  height={37}
                  width={37}
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="rounded-full"
                />
                <div
                  id="dropdownInformation"
                  className={` ${
                    showDropdown ? "z-10" : "hidden"
                  } bg-white absolute right-0 z-10 mt-2 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <div className="px-4 py-3 text-sm text-gray-900">
                    <div> {session?.user.name}</div>
                    <div className="font-medium truncate">
                      {session?.user.email}
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 "
                    aria-labelledby="dropdownInformationButton"
                  >
                    <li>
                      <Link
                        href="/main/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setShowDropdown(!showDropdown);
                        signOut({ callbackUrl: "/", redirect: true });
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button type="button" onClick={() => props.setDialog(true)}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}

      <div className="flex md:hidden relative z-10">
        <button onClick={() => setToggle(!toggle)}>
          <AiOutlineMenu size={24} />
        </button>
        {toggle && (
          <div className="dropdown bg-white mt-2 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 rounded-lg shadow ">
            {session?.user ? (
              <>
                <img
                  src={session?.user.image}
                  height={37}
                  width={37}
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="rounded-full"
                />
                <div class="px-4 py-3 border-b-2 border-gray-500">
                  <span class="block text-sm text-gray-900">
                    {session?.user.name}
                  </span>
                  <span class="block text-sm  text-gray-500 truncate ">
                    {session?.user.email}
                  </span>
                </div>
                <Link
                  href={`/`}
                  className="w-full rounded-lg"
                  onClick={() => setToggle(false)}
                >
                  <div className="w-full text-center text-sm text-gray-700 hover:bg-gray-100 py-2">
                    Home
                  </div>
                </Link>
                {props.portfolioData &&
                props.portfolioData.hasOwnProperty("success") &&
                !(props.portfolioData.success === false) ? (
                  <>
                    <Link
                      href={`/portfolio/view?id=${session.user.id}`}
                      className="w-full rounded-lg"
                      onClick={() => setToggle(false)}
                    >
                      <div className="w-full text-center text-sm text-gray-700 hover:bg-gray-100 py-2">
                        View
                      </div>
                    </Link>
                    <Link
                      href={`/main/edit?id=${session.user.id}`}
                      className="w-full rounded-lg"
                      onClick={() => setToggle(false)}
                    >
                      <div className="w-full text-center text-sm text-gray-700 hover:bg-gray-100 py-2">
                        Edit
                      </div>
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/main/createportfolio"
                    className="w-full rounded-lg py-2"
                  >
                    <div className="w-full text-center  text-sm text-gray-700 hover:bg-gray-100 py-2">
                      Create
                    </div>
                  </Link>
                )}
                <div className="w-full rounded-lg">
                  <button
                    onClick={() => {
                      setShowDropdown(!showDropdown);
                      signOut({ callbackUrl: "/", redirect: true });
                    }}
                    className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    <div className="w-full text-center  text-sm text-gray-700 hover:bg-gray-100 py-2">
                      Sign Out
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <>
                <button type="button" onClick={() => props.setDialog(true)}>
                  Sign In
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  portfolioData: state.portfolioData,
  loading: state.loading,
});
const mapDispatchToProps = (dispatch) => ({
  getPortfolio: (value) => dispatch(getPortfolio(value)),
  setDialog: (value) => dispatch(setDialog(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
