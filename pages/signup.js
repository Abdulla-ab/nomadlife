import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";

function signup() {
  const router = useRouter();
  
  return (
    <div>
      <Head>
        <title>NomadBuddy</title>
      </Head>

      <Header />

      <main className="bg-white">
        <div className="absolute w-screen flex content-center lg:my-6">
          <div className="hidden lg:block w-6/12 text-left space-y-8 py-5 pl-20">
            <div className="flex place-content-center">
              <div className="mt-5">
                <p className="text-[#055E70] font-bold text-4xl mb-3">
                  Sign up to
                </p>
                <p className="text-lg font-semibold place-content-center">
                  Join the community where millions of Digital Nomads network
                  and enjoy!
                </p>
                <p className="place-content-center mt-10 font-normal">
                  If you already have an account
                </p>
                <p className="font-light">
                  you can{" "}
                  <a
                    onClick={() => router.push("/signin")}
                    className="text-[#0B8CA5] link font-semibold"
                  >
                    Sign in here!
                  </a>
                </p>
              </div>
              <div className="my-24">
                <img src="sign-up-nomad.svg" class="w-auto h-auto items-end" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 py-5 relative">
            <SignupForm />
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default signup;
