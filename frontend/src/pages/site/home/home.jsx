import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import Section1 from "../../../components/site/section1/Section1";
import Section2 from "../../../components/site/section2/Section2";
import Section3 from "../../../components/site/section3/Section3";

const Home = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3/>
      <div>Home page</div>
    </>
  );
};

export default Home;
