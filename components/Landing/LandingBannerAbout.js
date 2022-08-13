import React from "react";
import { useRouter } from "next/router";

function LandingBanner() {
   const router = useRouter();

   return (
      <div className="max-w-2xl lg:max-w-6xl mx-auto text-center px-10 pt-4">
         {/* content with Image*/}
         <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 place-items-center sm:space-x-5">
            <div className="">
               {/* Main Header */}
               <div className="text-[#055E70] row-span-1 text-2xl font-bold text-center sm:text-left sm:text-3xl lg:text-5xl lg:space-y-2 lg:mb-3">
                  <h1 className="">Digital nomad lifestyle</h1>
                  <h1 className="">in enchanting Sri Lanka</h1>
               </div>

               {/* Content */}
               <p className="text-sm lg:text-l sm:text-left sm:text-base py-5">
                  A community that makes possible the lifestyle of being a
                  digital nomad who creates impact living in the enchanting
                  island Sri Lanka.
               </p>

               {/* Join Community Button */}
               <div className="flex justify-center sm:justify-start">
                  <a onClick={() => router.push("/signup")} className="button">
                     Join Community
                  </a>
               </div>
            </div>

            {/* Image */}
            <div className="sm:items-end mt-6">
               <img
                  alt="nomadLifePlanning"
                  className="h-50 w-50"
                  src="../landing_banner.svg"
               />
            </div>
         </div>
      </div>
   );
}

export default LandingBanner;
