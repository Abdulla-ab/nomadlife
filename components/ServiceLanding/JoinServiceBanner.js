import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function ServiceBanner() {
   const router = useRouter();

   return (
      <div
         onClick={() => router.push("/business/signup")}
         className="cursor-pointer bg-gradient-to-r from-[#0B8CA5] via-[#055E70] to-[#0B8CA5] text-white text-center py-5 rounded-lg"
      >
         <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
            REGISTER NOW AS A SERVICE PROVIDER
         </p>
      </div>
   );
}

export default ServiceBanner;
