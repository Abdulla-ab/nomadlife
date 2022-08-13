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
                  <h1 className="">What is a Digital Nomad Life Style?</h1>
               </div>

               {/* Content */}
               <p className="text-sm lg:text-l sm:text-left sm:text-base py-5">
                  In this modern age, perhaps you’re thinking about joining the
                  global movement to become a digital nomad. So, what is a
                  digital nomad and what do digital nomads actually do? A
                  digital nomad is someone who earns a living remotely via the
                  internet, usually while traveling and living nomadically.
                  Because of the remote nature of their work, digital nomads
                  have the freedom and flexibility to travel anywhere while they
                  work — as long as there’s a wifi connection.
               </p>

               {/* Join Community Button */}
               <div className="flex justify-center sm:justify-start">
                  <a onClick={() => router.push("/signin")} className="button">
                     Learn More
                  </a>
               </div>
            </div>

            {/* Image */}
            <div className="sm:items-end mt-6">
               <img
                  alt="nomadLifePlanning"
                  className="h-50 w-50"
                  src="../lifestyle.svg"
               />
            </div>
         </div>
      </div>
   );
}

export default LandingBanner;
