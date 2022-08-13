import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { classNames } from "./Utils";

const Dropdown = ({ actionsArray }) => {
   const [open, setOpen] = useState(false);

   return (
      <Menu
         as="div"
         className="overflow-visible inline-flex text-left"
         open={open}
      >
         <div>
            <Menu.Button
               onClick={() => setOpen(!open)}
               className="-z-50 inline-flex justify-center w-full rounded-md border-none  px-4 py-2 bg-white text-sm font-medium text-gray-700"
            >
               <BsThreeDotsVertical />
            </Menu.Button>
         </div>

         <Menu.Items className="z-50 absolute right-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {actionsArray.map((action) => (
               <Menu.Item>
                  {({ active }) => (
                     <a
                        //href={action.href}
                        onClick={() => setOpen(!open)}
                        className={classNames(
                           active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                           "block p-3 text-sm cursor-pointer border-b"
                        )}
                     >
                        {action.name}
                     </a>
                  )}
               </Menu.Item>
            ))}
         </Menu.Items>
      </Menu>
   );
};

export default Dropdown;
