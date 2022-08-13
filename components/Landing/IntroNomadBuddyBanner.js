import React from "react";
import { useRouter } from "next/router";

function IntroNomadBuddyBanner() {
  const router = useRouter();
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto text-center px-10">
      {/* heading */}
      <p className="text-[#055E70] font-semibold text-base sm:text-lg mb-6 lg:text-3xl">
        What is NomadBuddy?
      </p>

      {/* content with Image*/}
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 place-items-center sm:space-x-5">
        {/* Content */}
        <div className="">
          <p className="text-sm lg:text-xl sm:text-left sm:text-base">
            We are a Community with Focus on Innovation and Improving Lifestyle,
            people, and travel around.
          </p>

          <p className="text-xs lg:text-base sm:text-left sm:text-base text-gray-500 py-4">
            Spatium Innovation Hub is a thinking company on a mission to connect
            people and businesses with meaningful innovation, at scale.
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
            src="../intro_nomadbuddy.png"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroNomadBuddyBanner;
