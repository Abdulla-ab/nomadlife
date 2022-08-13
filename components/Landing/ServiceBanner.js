import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function ServiceBanner() {
   const router = useRouter();
   return (
      <div className="bg-gradient-to-r from-[#0B8CA5] via-[#055E70] to-[#0B8CA5] text-white text-center py-12 mt-4 rounded-lg lg:px-10">
         <p className="font-semibold text-base sm:text-lg  mb-12 lg:text-3xl">
            Services we provide for our community
         </p>

         <div className="grid grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
            <div className="flex flex-col place-items-center row-span-1 my-4">
               <div className="">
                  <img
                     alt="nomadLifePlanning"
                     className="h-30 w-30 lg:h-auto lg:w-auto"
                     src="../nomad_life_planning.png"
                  />
               </div>
               <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Digital Nomad Life<br></br>Planning with Accomadation
                  </p>
               </div>
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4">
               <div className="">
                  <img
                     alt="nomadLifePlanning"
                     className="h-30 w-30"
                     src="../nomad_community.png"
                  />
               </div>
               <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Strong Community for us
                  </p>
               </div>
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4">
               <div className="">
                  <img
                     alt="nomadLifePlanning"
                     className="h-30 w-30"
                     src="../nomad_spaces.png"
                  />
               </div>
               <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Co-Working Spaces
                  </p>
               </div>
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4">
               <div className="">
                  <img
                     alt="nomadLifePlanning"
                     className="h-30 w-30"
                     src="../Job_projects.png"
                  />
               </div>
               <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Job/ Volunteer Projects
                  </p>
               </div>
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4">
               <div className="">
                  <img
                     alt="findAllService"
                     className="h-30 w-30"
                     src="../find_all_service.png"
                  />
               </div>
               <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Find all our <br></br> Services
                  </p>
               </div>
            </div>

         </div>

         

         <div className="flex flex-col place-items-center row-span-1 my-4">
            {/* Register Button */}
            <div className="">
               <a
                  onClick={() => router.push("/business/signup")}
                  className="button"
               >
                  Partner up as a Service Provider
               </a>
            </div>
         </div>
      </div>
   );
}

export default ServiceBanner;
