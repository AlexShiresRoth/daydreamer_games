import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player/lazy";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100vh;
  background: #f5efed;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 1;
  & h1 {
    font-family: acier-bat-noir, sans-serif;
    font-weight: 400;
    color: #339989;
    font-size: 4rem;
    margin: 0.5rem 0;
  }
  & h3 {
    font-family: acier-bat-gris, sans-serif;
    font-weight: 400;
    color: #06070e;
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
`;

const LandingDisplay = () => {
  return (
    <Container>
      <Header>
        <h1>daydreamer games</h1>
        <h3>indie game studio</h3>
        <p>Coming soon...</p>
      </Header>
    </Container>
  );
};

LandingDisplay.propTypes = {};

export default LandingDisplay;
