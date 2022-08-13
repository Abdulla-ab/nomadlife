import React, { useState } from "react";
import {
   FaThLarge,
   FaChevronUp,
   FaBuffer,
   FaWhmcs,
   FaRegSun,
   FaHospitalUser,
   FaUsers,
} from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { RiLogoutBoxRLine, RiSettings5Line } from "react-icons/ri";
import { TbTransferOut } from "react-icons/tb";
import {
   BsFillFileEarmarkTextFill,
   BsFileBarGraphFill,
   BsFillLayersFill,
   BsFillGridFill,
} from "react-icons/bs";

import { useRouter } from "next/router";

export default function index() {
   let menuArray = [false, false, false];
   const [menu, setMenu] = useState(menuArray);
   const [show, setShow] = useState(true);

   const setMenuValue = (props) => {
      let newArr = [...menu];
      newArr[props] = !newArr[props];
      setMenu(newArr);
   };

   const router = useRouter();

   return (
      <div>
         <div
            id="Main"
            className={`${
               show ? "translate-x-0" : "-translate-x-full"
            } xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-auto  w-full sm:w-64 flex-col
            bg-gradient-to-b from-[#055E70] via-[#0B8CA5] to-[#055E70]`}
         >
            {/* NomadBuddy Logo */}
            <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
               <img
                  className="w-auto h-auto p-3"
                  src="../NomadBuddy_logo_white.png"
               ></img>
            </div>

            {/* User profile details */}
            <div className="justify-center flex flex-col items-center w-full">
               <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="avatar"
               />
               <h4 className="mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                  John Doe
               </h4>
               <p className="text-sm font-medium text-gray-300 dark:text-gray-300 hover:underline">
                  john@example.com
               </p>
            </div>

            {/* Dashboard */}
            <div className="mt-12 flex flex-col justify-start items-center  pl-4 w-full space-y-3 pb-5 ">
               <button
                  onClick={() => router.push("/admin")}
                  className="flex jusitfy-start items-center space-x-6 w-full text-white rounded "
               >
                  <BsFillGridFill />
                  <p className="text-base leading-4 ">Dashboard</p>
               </button>
            </div>

            {/* Menu 1 */}
            <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-400 w-full  ">
               <button
                  onClick={() => setMenuValue(0)}
                  className="text-white flex justify-between items-center w-full py-5 space-x-14  "
               >
                  <p className="text-sm leading-5  uppercase">Approvals</p>
                  <FaChevronUp
                     className={`${
                        menu[0] ? "" : "rotate-180"
                     } transform duration-100`}
                  />
               </button>
               <div
                  id="menu1"
                  className={`${
                     menu[0] ? "flex" : "hidden"
                  } justify-start  flex-col w-full md:w-auto items-start pb-1 `}
               >
                  <button
                     onClick={() => router.push("/admin/test")}
                     className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#055E70] focus:text-white hover:bg-[#055E70] text-white rounded px-3 py-2  w-full md:w-52"
                  >
                     <BsFillLayersFill />
                     <p className="text-base leading-4  ">Service Approval</p>
                  </button>
               </div>
            </div>
            {/* Menu 2 */}
            <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-400 w-full  ">
               <button
                  onClick={() => setMenuValue(1)}
                  className="text-white flex justify-between items-center w-full py-5 space-x-14  "
               >
                  <p className="text-sm leading-5 uppercase">Users</p>
                  <FaChevronUp
                     className={`${
                        menu[1] ? "" : "rotate-180"
                     } transform duration-100`}
                  />
               </button>
               <div
                  id="menu2"
                  className={`${
                     menu[1] ? "flex" : "hidden"
                  } justify-start  flex-col w-full md:w-auto items-start pb-1 `}
               >
                  <button
                     onClick={() => router.push("/admin/serviceProviders")}
                     className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#055E70] focus:text-white hover:bg-[#055E70] text-white rounded px-3 py-2  w-full md:w-52"
                  >
                     <FaHospitalUser />
                     <p className="text-base leading-4  ">Service Providers</p>
                  </button>
                  <button
                     onClick={() => router.push("/admin/digitalNomads")}
                     className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#055E70] focus:text-white hover:bg-[#055E70] text-white rounded px-3 py-2  w-full md:w-52"
                  >
                     <FaUsers />
                     <p className="text-base leading-4  ">Digital Nomads</p>
                  </button>
               </div>
            </div>
            {/* Menu 3 */}
            <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-400 w-full  ">
               <button
                  onClick={() => setMenuValue(2)}
                  className="text-white flex justify-between items-center w-full py-5 space-x-14  "
               >
                  <p className="text-sm leading-5 uppercase">Reports</p>
                  <FaChevronUp
                     className={`${
                        menu[2] ? "" : "rotate-180"
                     } transform duration-100`}
                  />
               </button>
               <div
                  id="menu3"
                  className={`${
                     menu[2] ? "flex" : "hidden"
                  } justify-start  flex-col w-full md:w-auto items-start pb-1 `}
               >
                  <button
                     onClick={() => router.push("/admin/test")}
                     className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#055E70] focus:text-white hover:bg-[#055E70] text-white rounded px-3 py-2  w-full md:w-52"
                  >
                     <BsFileBarGraphFill />
                     <p className="text-base leading-4  ">Traffic Reports</p>
                  </button>
                  <button
                     onClick={() => router.push("/admin/test")}
                     className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#055E70] focus:text-white hover:bg-[#055E70] text-white rounded px-3 py-2  w-full md:w-52"
                  >
                     <BsFillFileEarmarkTextFill />
                     <p className="text-base leading-4  ">Preference Reports</p>
                  </button>
                  <button
                     onClick={() => router.push("/admin/test")}
                     className="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#055E70] focus:text-white hover:bg-[#055E70] text-white rounded px-3 py-2  w-full md:w-52"
                  >
                     <TiLocation />
                     <p className="text-base leading-4  ">Location Reports</p>
                  </button>
               </div>
            </div>

            {/* Settings */}
            <div className="mt-12 flex flex-row justify-start items-center  pl-4 w-full space-y-3 pb-5 ">
               <button
                  onClick={() => router.push("/admin")}
                  className="flex jusitfy-start items-center space-x-6 w-full text-white rounded "
               >
                  <RiSettings5Line />
                  <p className="text-base leading-4 ">Settings</p>
               </button>
            </div>
            {/* Logout */}
            <div className="mt-1 flex flex-row justify-start items-center  pl-4 w-full space-y-3 pb-5 ">
               <button
                  onClick={() => router.push("/admin")}
                  className="flex jusitfy-start items-center space-x-6 w-full text-white rounded "
               >
                  <RiLogoutBoxRLine />
                  <p className="text-base leading-4 ">Logout</p>
               </button>
            </div>

            {/* User */}
            {/* <div className="flex flex-col justify-between items-center h-auto pb-6   px-6  w-full  space-y-32 ">
               <div></div>

               <div className="flex justify-between items-center w-full">
                  <div className="flex justify-center items-center  space-x-2">
                     <div>
                        <img
                           className="rounded-full"
                           src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                           alt="avatar"
                        />
                     </div>
                     <div className="flex justify-start flex-col items-start">
                        <p className="cursor-pointer text-sm leading-5 text-white">
                           Alexis Enache
                        </p>
                        <p className="cursor-pointer text-xs leading-3 text-gray-300">
                           alexis81@gmail.com
                        </p>
                     </div>
                  </div>
                  <FaWhmcs className="text-white w-6 h-6" />
               </div>
            </div> */}
         </div>

         {/* Mobile Panel */}
         {/* <div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
        <div className="flex justify-between  items-center space-x-3">
          <svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
              fill="white"
            />
          </svg>
          <p className="text-2xl leading-6 text-white">OvonRueden</p>
        </div>
        <div aria-label="toggler" className="flex justify-center items-center">
          <button
            aria-label="open"
            id="open"
            onClick={() => setShow(true)}
            className={`${
              show ? "hidden" : ""
            } focus:outline-none focus:ring-2`}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="close"
            id="close"
            onClick={() => setShow(false)}
            className={`${
              show ? "" : "hidden"
            } focus:outline-none focus:ring-2`}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div> */}
      </div>
   );
}
