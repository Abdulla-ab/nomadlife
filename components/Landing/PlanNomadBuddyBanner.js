import React from "react";
import { useRouter } from "next/router";

function PlanNomadBuddyBanner() {
  const router = useRouter();
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto text-center px-10">
      {/* heading */}
      <p className="text-[#055E70] font-semibold text-base sm:text-lg mb-6 lg:text-3xl">
        Plan my Nomad Lifestyle
      </p>

      {/* content with Image*/}
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 place-items-center sm:space-x-5">
        {/* Content */}
        <div className="order-last">
          <p className="text-sm lg:text-xl sm:text-right sm:text-base">
            NomadBuddy helps you plan your nomad lifestyle in Sri Lanka reducing
            your risk and making life easier.{" "}
          </p>

          <p className="text-xs lg:text-base sm:text-right sm:text-base text-gray-500 py-4">
            Spatium Innovation Hub is a thinking company on a mission to connect
            people and businesses with meaningful innovation, at scale.
          </p>

          {/* Join Community Button */}
          <div className="flex justify-center sm:justify-end">
            <a onClick={() => router.push("/")} className="button">
              Let us Plan
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="sm:items-end mt-6">
          <img
            alt="nomadLifePlanning"
            className="h-50 w-50"
            src="../plan_nomadBuddy.png"
          />
        </div>
      </div>
    </div>
  );
}

export default PlanNomadBuddyBanner;
