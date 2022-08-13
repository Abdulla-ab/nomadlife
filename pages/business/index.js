import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import LandingBannerService from "../../components/ServiceLanding/LandingBannerService";
import JoinServiceBanner from "../../components/ServiceLanding/JoinServiceBanner";
import FooterShort from "../../components/FooterShort";
import ServiceList from "../../components/ServiceLanding/ServiceList";

export default function Services() {
  return (
    <div>
      <Head>
        <title>NomadBuddy</title>
      </Head>
      <Header />

      <main className="bg-white space-y-20">
        <LandingBannerService />
        <JoinServiceBanner />
        <ServiceList />
      </main>

      <FooterShort />
    </div>
  );
}
