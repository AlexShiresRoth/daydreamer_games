import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../styles/styles.css";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

Layout.propTypes = {};

export default Layout;
