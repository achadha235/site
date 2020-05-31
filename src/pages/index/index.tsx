import Layout from "components/Layout";
import React from "react";
import Logo from "components/Logo";

const Home = () => {
  return (
    <Layout>
      <>
        <div className="item w-full h-screen overflow-hidden flex flex-col justify-center items-center">
          <h1 className="font-normal">NewsHacker</h1>
          <Logo />
        </div>
      </>
    </Layout>
  );
};

export default Home;
