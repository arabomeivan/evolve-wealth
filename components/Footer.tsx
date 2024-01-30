"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  const isSignupPage = pathname && pathname.startsWith("/signup");
  return (
    <div>
      {!isSignupPage && (
        <div className="shadow-md py-10">
          <div className="container space-y-3 md:space-y-0 md:flex justify-between">
            <p className="text-purple">
              © All rights reserved to Evolve investment{" "}
            </p>
            <button
              className="middle none center shadow-md self-center rounded-lg py-2 px-6  base-btn  text-white"
              data-ripple-light="true"
            >
              Download Certificate
            </button>
            <p className="text-grey">Privacy Policy</p>
            <p className="text-grey">Terms & Conditions </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
