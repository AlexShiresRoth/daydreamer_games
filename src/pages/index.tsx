import * as React from "react";
import { createGlobalStyle } from "styled-components";
import LandingDisplay from "../components/LandingDisplay";
import Fonts from "../fonts/Fonts";
import Layout from "../layout/Layout";

// markup
const GlobalStyle = createGlobalStyle`
  body, html {
    margin:0;
    padding:0;
    box-sizing:border-box;
    overflow-x:hidden;
  }`;

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Fonts />
      <LandingDisplay />
    </Layout>
  );
};

export default IndexPage;
