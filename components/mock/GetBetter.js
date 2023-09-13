import React from "react";
import { Background, Container, Flex } from "../generic";
import { H2 } from "../Typography";
import { PrimaryBtn } from "../Buttons";

const GetBetter = () => {
  return (
    <Background
      $color="#20113B"
      $img="/mock-images/monki.png"
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container $pt={180} $pb={180}>
        <Flex $justify="center" $align="center" $direction="column" $gap={20}>
          <H2 $align="center" $color="#fff">
            GET A BETTER RESUME
          </H2>
          <PrimaryBtn>Get started</PrimaryBtn>
        </Flex>
      </Container>
    </Background>
  );
};

export default GetBetter;
