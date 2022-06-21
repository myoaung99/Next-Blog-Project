import React from "react";
import Head from "next/head";
import ContactForm from "../components/contact-page/contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Send message to Myo Myint Aung" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
