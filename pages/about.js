import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LandingBannerAbout from "../components/Landing/LandingBannerAbout";
import FooterShort from "../components/FooterShort";

export default function Services() {
   return (
      <div>
         <Head>
            <title>NomadBuddy</title>
         </Head>
         <Header />

         <main className="bg-white space-y-20">
            <LandingBannerAbout />
         </main>

         <FooterShort />
      </div>
   );
}
