import Layout from "../../components/Layout";
import PackagesHero from "../../components/Packages/PackagesHero";
import Overview from "../../components/Packages/Overview";

const Packages = () => {
  return (
    <Layout>

      {/* hero */}
      <PackagesHero />

      {/* Package Overview */}
     <Overview />
     
    </Layout>
  );
};

export default Packages;
