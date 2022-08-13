import React from "react";
import AdminPanel from "./SidePanel/AdminSidePanel";

const AdminLayout = ({ children }) => {
   return (
      <>
         <div className="hidden xl:flex h-full flex flex-row justify-start bg-[#055E70]">
            <div className="bg-gradient-to-b from-[#055E70] via-[#0B8CA5] to-[#055E70] h-full">
               <AdminPanel />
            </div>
            <div className="bg-white flex-1 p-4 w-9/12">{children}</div>
         </div>

         {/* <div className="xl:hidden">
            <div>
               <AdminPanel />
            </div>
            <div>{children}</div>
         </div> */}
      </>
   );
};

export default AdminLayout;
