import React from "react";
import { useRouter } from "next/router";

const services = [
  {
    title: "Digital Nomad Life Planning",
    img: "../services_1.svg",
    href: "/business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Strong Community for us",
    img: "../services_2.svg",
    href: "/business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Co-Working Spaces",
    img: "../services_3.svg",
    href: "/business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Job Projects",
    img: "../services_4.svg",
    href: "/business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Other Services",
    img: "../services_5.svg",
    href: "/business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function ServiceList() {
  const router = useRouter();

  return (
    <div className="pb-16">
      <div className="text-[#055E70] text-center py-5 rounded-lg lg:px-10">
        <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          CLICK HERE TO JOIN AS A SERVICE PROVIDER
        </p>
      </div>
      <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
        {services.map((item) => (
          <div
            className="flex flex-col md:flex-row overflow-hidden
                                        bg-[#E4F2F5] rounded-lg shadow-xl  mt-4 w-100 mx-2 p-5"
          >
            <img
              className="h-auto w-56 sm:h-auto sm:w-auto p-5"
              src={item.img}
            />

            <div className="w-full py-4 px-6 flex flex-col justify-center">
              {/* Title */}
              <h3 className="text-[#055E70] font-semibold text-xl leading-tight truncate">
                {item.title}
              </h3>
              {/* Description */}
              <p className="pt-2">{item.desc}</p>

              {/* Join Community Button */}
              <div className="flex justify-end pt-5">
                <a onClick={() => router.push(item.href)} className="button">
                  Join Community
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
