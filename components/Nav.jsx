"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { Expletus_Sans } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@public/assets/images/rlogo.svg";
import profile from "@public/assets/images/madhur.jpeg";

const ExpletusSans = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // style: ["italic", "normal"],
});

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const [providers, setProviders] = useState(null);
  const [viewPortfolio, setViewPortfolio] = useState(false);

  if (session) {
    const portfolioExistsCheck = async () => {
      console.log(session.user.id);
      const response = await fetch(`/api/portfolio/view/${session.user.id}`);

      if (response) setViewPortfolio(true);
    };
    portfolioExistsCheck();
  }

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <nav className="flex flex-row justify-between p-3 w-full mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={logo} className="object-contain" width={30} height={30} />
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
          {session?.user ? (
            <>
              {viewPortfolio ? (
                <Link href={`/portfolio/view?id=${session.user.id}`}>View</Link>
              ) : (
                <Link href="/main/createportfolio">Create</Link>
              )}

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
                    <div>Tanmay Patil</div>
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
                        href="/profile"
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
                        signOut();
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
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden relative">
        <button onClick={() => setToggle(!toggle)}>
          <AiOutlineMenu size={24} />
        </button>
        {toggle && (
          <div className="dropdown outline">
            <Link href="/" className="dropdown-link">
              Home
            </Link>
            {session?.user ? (
              <>
                <Link href="/main/createportfolio" className="dropdown-link">
                  Create
                </Link>

                <div className="relative inline-block text-left">
                  {console.log(session?.user.image)}
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
                      <div>Tanmay Patil</div>
                      <div className="font-medium truncate">
                        name@flowbite.com
                      </div>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownInformationButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
