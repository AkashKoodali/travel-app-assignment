import AboutHeroSection from "../../components/About-us/AboutHeroSection";
import Certificate from "../../components/About-us/Certificate";
import OurTeam from "../../components/About-us/OurTeam";
import Layout from "../../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      {/* hero */}
      <AboutHeroSection />

      {/* our team */}
     <OurTeam />

      {/* Certificate */}
      <Certificate />

    </Layout>
  );
};

export default AboutUs;
