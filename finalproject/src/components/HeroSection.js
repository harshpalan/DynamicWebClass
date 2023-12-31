import React from "react";
import styled from "styled-components";
import retroVideo from "../assets/video/retro.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontxxxl);
  font-family: var(--fontS);
  color: rgb(255, 217, 0);

  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
    left: 1rem;
  }

  @media screen and (max-width: 30em) {
    width: 70%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;

  font-family: var(--fontP);

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxxl);
    }
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    background-image: linear-gradient(90deg, var(--gradient));
    align-items: flex-start;
    filter: brightness(1.1);

    & > *:last-child {
      align-self: flex-end;
    }

    height: 80vh;
    padding: 0 1rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
    opacity: 0.35;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <VideoContainer>
        <video src={retroVideo} type="video/mp4" autoPlay loop muted></video>
      </VideoContainer>
      <Title>GameBoy Color</Title>
      <TextContainer>
        <span>The OG</span>
        <span>Console</span>
      </TextContainer>
    </Section>
  );
};

export default HeroSection;
