import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import ServiceCard from "../../components/secviceCards/ServiceCard";
import PricingTable from "../../components/pricingTable/PricingTable";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCard />
      <PricingTable />
      <Contact />
    </Layout>
  );
};

export default Home;
