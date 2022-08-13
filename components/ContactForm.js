import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bcrypt from "bcryptjs";

import CountryJSON from "../public/data/countries.json";

import UserService from "../services/UserService";

function SignupForm() {
   const router = useRouter();

   const validationSchema = yup.object().shape({
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      gender: yup.string().required("Gender is required"),
      country: yup.string().required("Country is required"),
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
   });

   const [userNomad, setUserNomad] = useState({
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      user: {
         email: "",
         password: "",
         role: "Nomad",
      },
   });

   const handleChange = (e) => {
      const value = e.target.value;
      setUserNomad({ ...userNomad, [e.target.name]: value });
   };
   const handleChangeUser = (e) => {
      const value = e.target.value;
      setUserNomad({
         ...userNomad,
         user: { ...userNomad.user, [e.target.name]: value },
      });
   };

   const formOptions = { resolver: yupResolver(validationSchema) };

   const { register, handleSubmit, reset, formState } = useForm(formOptions);
   const { errors } = formState;

   const onSubmit = (e) => {
      const hashedPassword = bcrypt.hashSync(
         userNomad.user.password,
         bcrypt.genSaltSync()
      );

      const userData = {
         ...userNomad,
         user: { ...userNomad.user, password: hashedPassword },
      };
      console.log(userData);

      // verify password
      // const doesPasswordMatch = bcrypt.compareSync(
      //    userNomad.user.password,
      //    hashedPassword
      // );

      UserService.addUserNomad(userData)
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
                  Submit your query
               </h2>
            </div>

            <div className="mt-8">
               <div className="my-6 flex gap-4">
                  <div className="w-1/2">
                     <div className="">
                        <input
                           type="text"
                           name="firstName"
                           {...register("firstName")}
                           value={userNomad.firstName}
                           onChange={(e) => handleChange(e)}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="First Name"
                        />
                        {/* invalid message */}
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.firstName?.message}
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-1/2">
                     <div className="">
                        <input
                           type="text"
                           name="lastName"
                           {...register("lastName")}
                           value={userNomad.lastName}
                           onChange={(e) => handleChange(e)}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Last Name"
                        />
                        {/* invalid message */}
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.lastName?.message}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="my-6 flex gap-4">
                  <div className="w-1/2">
                     <div className="">
                        <select
                           name="gender"
                           {...register("gender")}
                           value={userNomad.gender}
                           onChange={(e) => handleChange(e)}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                        >
                           <option hidden value="">
                              Gender
                           </option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="other">Other</option>
                        </select>

                        {/* invalid message */}
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.gender?.message}
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-1/2">
                     <div className="">
                        <select
                           name="country"
                           {...register("country")}
                           value={userNomad.country}
                           onChange={(e) => handleChange(e)}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                        >
                           <option hidden value="">
                              Country
                           </option>
                           {CountryJSON.map((item) => (
                              <option value={item}>{item}</option>
                           ))}
                        </select>

                        {/* invalid message */}
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.country?.message}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="my-6">
                  <div className="">
                     <div className="">
                        <input
                           type="text"
                           name="email"
                           {...register("email")}
                           value={userNomad.email}
                           onChange={(e) => handleChangeUser(e)}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Email"
                        />
                        {/* invalid message */}
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
                           {...register("password")}
                           onChange={(e) => handleChangeUser(e)}
                           value={userNomad.password}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Password"
                        />
                        {/* invalid message */}
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
                           {...register("confirmPassword")}
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Confirm password"
                        />
                        {/* invalid message */}
                        <div>
                           <p className="text-red-500 text-xs italic text-left">
                              {errors.confirmPassword?.message}
                           </p>
                        </div>
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
                     Submit
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}

export default SignupForm;
