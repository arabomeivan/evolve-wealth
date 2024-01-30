"use client";

import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isSignupPage = pathname.startsWith("/signup");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleValue = () => {
    setToggle((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface Links {
    title: string;
    link: string;
  }

  let links: Links[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Plans",
      link: "/plans",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
  ];
  return (
    <div>
      {!isSignupPage && (
        <nav
          className={
            scrolled
              ? "bg-white navbar fixed top-0 w-full shadow-md"
              : "navbar fixed top-0 w-full shadow-md"
          }
        >
          <div className="container flex justify-between">
            <Image
              alt="not loading"
              src={Logo}
              width={50}
              height={50}
              className=""
            />
            <div className="md:flex hidden">
              <div className="flex mr-4">
                {links.map((links, index) => (
                  <Link
                    className={
                      pathname === links.link
                        ? "ml-5 flex justify-center self-center activeLink"
                        : "ml-5 flex justify-center self-center"
                    }
                    href={links.link}
                    key={index}
                  >
                    {links.title}
                  </Link>
                ))}
              </div>

              <div className="flex">
                <button
                  onClick={() => router.push("/signup")}
                  className="middle none center self-center rounded-lg px-6 connect-btn text-white h-[34px]"
                  data-ripple-light="true"
                >
                  Sign In
                </button>
              </div>
            </div>

            <div className="md:hidden flex">
              <button
                className="middle none center self-center rounded-lg px-6 bg-transparent  text-white h-[34px]"
                data-ripple-light="true"
                onClick={toggleValue}
              >
                <MenuIcon className="h-6 w-6 text-slate-400" />
              </button>
            </div>
          </div>

          {toggle && (
            <div className="container text-center md:hidden space-y-2 pb-4">
              {links.map((links, index) => (
                <Link
                  className={
                    pathname === links.link
                      ? " flex self-center justify-center  activeLink"
                      : " flex justify-center  self-center"
                  }
                  href={links.link}
                  key={index}
                >
                  {links.title}
                </Link>
              ))}

              <button
                className="middle none center self-center rounded-lg px-6 connect-btn text-white h-[34px]"
                data-ripple-light="true"
              >
                Sign In
              </button>
            </div>
          )}
        </nav>
      )}
    </div>
  );
}

export default NavBar;
