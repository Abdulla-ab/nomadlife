import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SigninForm() {
   const router = useRouter();

   const validationSchema = yup.object().shape({
      emailOrUsername: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
   });

   const formOptions = { resolver: yupResolver(validationSchema) };

   const { register, handleSubmit, reset, formState } = useForm(formOptions);
   const { errors } = formState;

   function onSubmit(data) {
      console.log(data);
      router.push("/signup");
   }

   return (
      <div>
         <form
            className="w-5/6 sm:w-2/3 mx-auto text-center"
            onSubmit={handleSubmit(onSubmit)}
         >
            <div className="">
               <h2 className="text-3xl font-bold text-[#055E70] lg:text-left text-center">
                  Sign in
               </h2>
               <p className="sm:hidden place-content-center mt-10 font-normal text-sm">
                  if you don't have an account
               </p>
               <p className="sm:hidden font-normal text-sm">
                  you can{" "}
                  <a
                     onClick={() => router.push("/signup")}
                     className="text-[#4D47C3] link font-semibold"
                  >
                     Register here!
                  </a>
               </p>
            </div>
            <div className="mt-8">
               <div className="my-6">
                  <div className="">
                     <div className="">
                        <input
                           type="text"
                           name="emailOrUsername"
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Email or Username"
                           {...register("emailOrUsername")}
                        />
                     </div>
                  </div>
               </div>
               {/* invalid message */}
               <div className="-my-3">
                  <p className="text-red-500 text-xs italic text-left">
                     {errors.emailOrUsername?.message}
                  </p>
               </div>
               <div className="my-8">
                  <div className="">
                     <div className="">
                        <input
                           type="password"
                           name="password"
                           className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
                           placeholder="Password"
                           {...register("password")}
                        />
                     </div>
                  </div>
               </div>
               {/* invalid message */}
               <div className="-my-4">
                  <p className="text-red-500 text-xs italic text-left">
                     {errors.password?.message}
                  </p>
               </div>
               <div className="my-6">
                  <p className="text-left">
                     <button
                        type="button"
                        onClick={() => reset()}
                        className="text-[#059AB7] text-sm italic link px-1"
                     >
                        Forgot Password?
                     </button>
                  </p>
               </div>

               <div className="my-6">
                  <button className="inline-block button w-full" type="submit">
                     Sign in
                  </button>
               </div>
               {/* <div className="lg:text-right text-center">
                                    <a href="#" class="text-[#059AB7] link text-sm">Forgot your password?</a>
                                    </div> */}
               <div className="mt-4">
                  <p className="text-gray-800 text-center">Or continue with</p>
                  <div className="mt-2 flex text-2xl justify-center gap-2">
                     <a onClick={() => router.push("/")}>
                        <img
                           src="icons8-facebook-50.png"
                           alt="facebook"
                           className="w-8 h-8 cursor-pointer"
                        />
                     </a>
                     <a onClick={() => router.push("/")}>
                        <img
                           src="icons8-google-50.png"
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

export default SigninForm;
