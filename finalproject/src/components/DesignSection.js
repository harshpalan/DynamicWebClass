import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--dark);
  overflow: hidden;
`;

const TestContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--white);

  span {
    font-size: var(--fontxxxl);
    width: 80%;
    text-transform: capitalize;
  }
`;

const TestContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--white);

  span {
    font-size: var(--fontxxxl);
    width: 70%;
    text-transform: capitalize;
  }
`;

const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (tl) {
        tl.kill();``
      }
    };
  }, []);
  return (
    <Section ref={container}>
      <TestContainer ref={textOne}>
        <span>Unbeatable design, unstoppable durability.</span>
      </TestContainer>
      <TestContainer2 ref={textTwo}>
        <span>Designed to outlast your game.</span>
      </TestContainer2>
    </Section>
  );
};

export default DesignSection;
