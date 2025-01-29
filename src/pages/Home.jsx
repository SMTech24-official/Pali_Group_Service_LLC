import React from "react";
import Banner from "../components/Banner";
import Awards from "../components/Awards";
import Choose from "../components/Choose";
import Service from "../components/Service";
import Faq from "../components/Faq";
import Inspection from "../components/Inspection";
import Contact from "../components/Contact";
import About from "../components/About";
// import Activity from "../components/Activity";
import Dedicate from "../components/Dedicate";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Pali Group Service LLC</title>
        <meta
          name="description"
          content="Pali Group Service LLC offers comprehensive IOR services for construction projects in California. Learn more about our services."
        />
      </Helmet>
      <Banner />
      {/* <Activity /> */}
      <Dedicate/>
      <Service />
      <About />
      <Choose />
      <Awards />
      <Faq />
      <Inspection />
      <Contact />
    </div>
  );
};

export default Home;
