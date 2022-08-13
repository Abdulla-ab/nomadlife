import React from "react";
import { useRouter } from "next/router";

function ExploreIslandStory() {
  const router = useRouter();
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto text-center px-10">
      {/* heading */}
      <p className="text-[#055E70] font-semibold text-base sm:text-lg mb-6 lg:text-3xl">
        Explore the beautiful Sri Lanka
      </p>

      {/* content with Image*/}
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 place-items-center sm:space-x-5">
        {/* Content */}
        <div className="">
          <p className="text-sm lg:text-xl sm:text-left sm:text-base">
            Explore Island Stories<br></br>
            <br></br>See what's waiting for you on your next island getaway.
            Savour the unique experiences this island treasure has to offer.
          </p>

          <p className="text-xs lg:text-base sm:text-left sm:text-base text-gray-500 py-4">
            The Setroman is not your regular market place. You go to a regular
            market place, but The Jornyman comes to you. And it brings the
            complete market place experience with it.
          </p>

          {/* Join Community Button */}
          <div className="flex justify-center sm:justify-start">
            <a onClick={() => router.push("/")} className="button">
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="sm:items-end mt-6">
          <img
            alt="slmap_nomadBuddy"
            className="h-50 w-50"
            src="../slmap_nomadBuddy.png"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreIslandStory;
