import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/HeaderNomad";
import FooterShort from "../../components/FooterShort";

export default function Services() {
   return (
      <div>
         <Head>
            <title>NomadBuddy</title>
         </Head>
         <Header />

         <main className="bg-white space-y-20"></main>

         <FooterShort />
      </div>
   );
}
