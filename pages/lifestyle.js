import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LandingBannerLifeStyle from "../components/Landing/LandingBannerLifeStyle";
import FooterShort from "../components/FooterShort";

export default function Services() {
   return (
      <div>
         <Head>
            <title>NomadBuddy</title>
         </Head>
         <Header />

         <main className="bg-white space-y-20">
            <LandingBannerLifeStyle />

            <div className="justify-center">
               <ReactPlayer
                  url="https://www.youtube.com/watch?v=iXGtx-hroKE"
                  className="bg-center mx-auto"
               />
            </div>
         </main>

         <FooterShort />
      </div>
   );
}
