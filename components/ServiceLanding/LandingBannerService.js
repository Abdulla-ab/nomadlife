import React from "react";
import { useRouter } from "next/router";

function LandingBanner() {
  const router = useRouter();
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto text-center px-10 pt-10">
      {/* content with Image*/}
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 place-items-center sm:space-x-5">
        <div className="">
          {/* Main Header */}
          <div className="text-[#055E70] row-span-1 text-2xl font-bold text-center sm:text-left sm:text-3xl lg:text-4xl lg:space-y-2 lg:mb-3">
            <h1 className="">
              Explore and Experience the ultimate nomad life with your Nomad
              Buddies...
            </h1>
          </div>

          {/* Content */}
          <p className="text-sm lg:text-l sm:text-left sm:text-base py-5">
            The goal of NomadBuddy is to provide a seamless opportunity for
            Digital Nomads during their stay in the perl of indian ocean to
            explore, enjoy and develop themselves while creating a network that
            benefits our community in all the possible ways.
          </p>
        </div>

        {/* Image */}
        <div className="sm:items-end mt-6">
          <img
            alt="nomadLifePlanning"
            className="h-50 w-50"
            src="../services_landing_banner.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
