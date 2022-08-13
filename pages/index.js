import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LandingBanner from "../components/Landing/LandingBanner";
import ServiceBanner from "../components/Landing/ServiceBanner";
import IntroNomadBuddyBanner from "../components/Landing/IntroNomadBuddyBanner";
import PlanNomadBuddyBanner from "../components/Landing/PlanNomadBuddyBanner";
import ExploreIslandStory from "../components/Landing/ExploreIslandStory";
import FooterShort from "../components/FooterShort";
import CityBanner from "../components/Landing/CityBanner";

export default function Home() {
   return (
      <div>
         <Head>
            <title>NomadBuddy</title>
         </Head>
         <Header />

         <main className="bg-white space-y-20">
            <LandingBanner />
            <ServiceBanner />
            {/* City Banner */}
            <CityBanner />
            <IntroNomadBuddyBanner />
            <PlanNomadBuddyBanner />
            <ExploreIslandStory />
            {/* FAQ */}
         </main>

         <FooterShort />
      </div>
   );
}
