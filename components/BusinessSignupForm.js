import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bcrypt from "bcryptjs";

import UserService from "../services/UserService";

function BusinessSignupForm() {
   const router = useRouter();

   const validationSchema = yup.object().shape({
      name: yup.string().required("Business Name is required"),
      email: yup
         .string()
         .required("Email is required")
         .email("Email is invalid"),
      password: yup
         .string()
         .required("Password is required")
         .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
         ),
      confirmPassword: yup
         .string()
         .oneOf([yup.ref("password"), null], "Passwords must match")
         .required("Re-type and confirm password"),
      brFile: yup.mixed().required("BR is required"),
   });

   const [userBusiness, setUserBusiness] = useState({
      name: "",
      user: {
         email: "",
         password: "",
         role: "Business",
         status: "Pending Verification",
      },
   });

   const handleChange = (e) => {
      const value = e.target.value;
      setUserBusiness({ ...userBusiness, [e.target.name]: value });
   };
   const handleChangeUser = (e) => {
      const value = e.target.value;
      setUserBusiness({
         ...userBusiness,
         user: { ...userBusiness.user, [e.target.name]: value },
      });
   };

   const formOptions = { resolver: yupResolver(validationSchema) };

   const { register, handleSubmit, reset, formState } = useForm(formOptions);
   const { errors } = formState;

   const onSubmit = (e) => {
      const hashedPassword = bcrypt.hashSync(
         userBusiness.user.password,
         bcrypt.genSaltSync()
      );

      const userData = {
         ...userBusiness,
         user: { ...userBusiness.user, password: hashedPassword },
      };
      //console.log(userData);

      // verify password
      // const doesPasswordMatch = bcrypt.compareSync(
      //    userBusiness.user.password,
      //    hashedPassword
      // );

      UserService.addUserBusiness(userData)
         .then((res) => {
            console.log(res);
            router.push("/signin");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div>
         <form
            className="w-5/6 sm:w-2/3 mx-auto text-center"
            onSubmit={handleSubmit(onSubmit)}
         >
            <div className="">
               <h2 className="text-3xl font-bold text-[#055E70] lg:text-left text-center">
                  Sign up
               </h2>
               <p className="sm:hidden place-content-center mt-10 font-normal text-sm">
                  If you already have an account
               </p>
               <p className="sm:hidden font-normal text-sm">
                  you can{" "}
                  <a
                     onClick={() => router.push("/signin")}
                     className="text-[#4D47C3] link font-semibold"
                  >
                     Sign in here!
                  </a>
               </p>
            </div>
            <div className="mt-12">
               <div className="my-6">
                  <div className="">
                     <div className="">
                        <input
                           type="text"
                           name="name"
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Business Name"
                           {...register("name")}
                           value={userBusiness.name}
                           onChange={(e) => handleChange(e)}
                        />
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.name?.message}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="my-6">
                  <div className="">
                     <div className="">
                        <input
                           type="email"
                           name="email"
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Email"
                           {...register("email")}
                           value={userBusiness.email}
                           onChange={(e) => handleChangeUser(e)}
                        />
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.email?.message}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="my-6">
                  <div className="">
                     <div className="">
                        <input
                           type="password"
                           name="password"
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Password"
                           {...register("password")}
                           value={userBusiness.password}
                           onChange={(e) => handleChangeUser(e)}
                        />
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.password?.message}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="my-6">
                  <div className="">
                     <div className="">
                        <input
                           type="password"
                           name="confirmPassword"
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Confirm password"
                           {...register("confirmPassword")}
                        />
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.confirmPassword?.message}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="my-6">
                  <div className="text-left">
                     <p className="pb-2 text-base">
                        Upload your BR here (.pdf)
                     </p>
                     <input
                        type="file"
                        accept="application/pdf"
                        name="brFile"
                        {...register("brFile")}
                        value={userBusiness.brFile}
                        onChange={(e) => handleChange(e)}
                     />
                     <div>
                        <p className="text-red-500 text-xs italic text-left">
                           {errors.brFile?.message}
                        </p>
                     </div>
                  </div>
               </div>
               <div className="my-2">
                  <p className="text-left">
                     <button
                        type="button"
                        onClick={() => reset()}
                        className="text-[#059AB7] text-sm italic link px-1"
                     >
                        Reset
                     </button>
                  </p>
               </div>

               <div className="my-6">
                  <button className="inline-block button w-full" type="submit">
                     Sign up
                  </button>
               </div>
               <div className="mt-4">
                  <p className="text-gray-800 text-center">Or continue with</p>
                  <div className="mt-2 flex text-2xl justify-center gap-2">
                     <a onClick={() => router.push("/")}>
                        <img
                           src="../icons8-facebook-50.png"
                           alt="facebook"
                           className="w-8 h-8 cursor-pointer"
                        />
                     </a>
                     <a onClick={() => router.push("/")}>
                        <img
                           src="../icons8-google-50.png"
                           alt="google"
                           className="w-8 h-8 cursor-pointer"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
}

export default BusinessSignupForm;
