import React, { useMemo, useState } from "react";
import Table, {
   AvatarCell,
   SelectColumnFilter,
   StatusPill,
} from "../../components/Table/Table";
import AdminLayout from "../../components/Layout/AdminLayout";

import UserService from "../../services/UserService";

function App() {
   const columns = useMemo(
      () => [
         {
            Header: "Id",
            accessor: "businessId",
         },
         {
            Header: "Name",
            accessor: "name",
            Cell: AvatarCell,
            userAccessor: "user",
            imgAccessor: "profileImg",
            emailAccessor: "email",
         },
         {
            Header: "BR copy",
            accessor: "brFile",
         },
         {
            Header: "Status",
            accessor: "user.status",
            Cell: StatusPill,
            Filter: SelectColumnFilter,
            filter: "includes",
         },
      ],
      []
   );

   const [users, setUsers] = useState([
      {
         businessId: "",
         name: "",
         contact: "",
         brFile: "",
         user: {
            userId: "",
            email: "",
            password: "",
            role: "",
            profileImg: "",
            status: "",
         },
      },
   ]);

   useMemo(
      () =>
         UserService.getUserBusinessAll()
            .then((res) => {
               setUsers(res.data);
            })
            .catch((err) => {
               console.log(err);
            }),
      []
   );
   console.log(users);

   return (
      <AdminLayout>
         <div className="min-h-screen">
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
               <div>
                  <h1 className="text-[#055E70] pb-3 border-b border-gray-200 text-3xl font-bold">
                     Service Providers
                  </h1>
               </div>
               <div className="mt-8">
                  <Table
                     columns={columns}
                     data={users}
                     actionsArray={[
                        { name: "Edit", href: "/" },
                        { name: "Status", href: "/" },
                        { name: "Full Details", href: "/" },
                     ]}
                  />
               </div>
            </main>
         </div>
      </AdminLayout>
   );
}

export default App;
