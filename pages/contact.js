import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Contact from "../components/Landing/Contact";
import FooterShort from "../components/FooterShort";
import ContactForm from "../components/ContactForm";

export default function Services() {
   return (
      <div>
         <Head>
            <title>NomadBuddy</title>
         </Head>
         <Header />

         <main className="bg-white space-y-20">
            <Contact />
            <ContactForm />
         </main>

         <FooterShort />
      </div>
   );
}
