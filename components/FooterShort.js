import React from "react";
import { useRouter } from "next/router";

function Footer() {
   const router = useRouter();
   return (
      <footer className="bg-gradient-to-r from-[#0B8CA5] via-[#055E70] to-[#0B8CA5] text-white mt-16 pb-8 xl:pt-8">
         <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
            <div className="flex max-w-xs mx-auto mt-5 mb-8 items-center justify-center">
               <img
                  src="NomadBuddy_logo_white.png"
                  alt="nomadBuddy_logo"
                  className="w-52 h-auto lg:w-auto"
               />
            </div>

            <div className="flex flex-col-4 gap-x-3 mb-8 items-center justify-center">
               <a onClick={() => router.push("/")}>
                  <img
                     src="facebook_logo.png"
                     alt="facebook"
                     className="w-7 h-auto"
                  />
               </a>
               <a onClick={() => router.push("/")}>
                  <img
                     src="instagram_logo.png"
                     alt="instagram"
                     className="w-7 h-auto"
                  />
               </a>
               <a onClick={() => router.push("/")}>
                  <img
                     src="linkedin_logo.png"
                     alt="linkedin"
                     className="w-7 h-auto"
                  />
               </a>
               <a onClick={() => router.push("/")}>
                  <img
                     src="twitter_logo.png"
                     alt="twitter"
                     className="w-7 h-auto"
                  />
               </a>
            </div>
            <div class="pt-8 flex border-t border-gray-200 mx-auto items-center justify-center">
               <p className="text-xs font-sm">
                  Copyright © {new Date().getFullYear()} CYRAYS Inc. All rights
                  reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
