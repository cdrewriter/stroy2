import Head from "next/head";


import ConstructionSection from "../components/Section/Construction-t";
import PortfolioSection from "../components/Section/Portfolio-t";
import UslugiSection from "../components/Section/UslugiPage-t";

const Main = () => {
      return (
      <>
        <Head>
          <title>Appssss</title>
        </Head>

        <div className="shadow-2xl pb-24">
        <ConstructionSection />
        <PortfolioSection  />
        </div>
        <UslugiSection  />
     </>
    );
  };

export default Main;
