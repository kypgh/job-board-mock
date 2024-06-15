import React from "react";
import { Background, Container, Flex } from "../generic";
import { H2 } from "../Typography";
import { PrimaryBtn } from "../Buttons";

const NeedHelp = () => {
  return (
    <Background $color="#3D2462">
      <Container $pt={80} $pb={80}>
        <Flex $justify="center" $align="center" $direction="column" $gap={20}>
          <H2 $color="#fff" $align="center">
            Need Help with your Resume?
          </H2>
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            We offer both free and premium resume writing services
          </p>
          <PrimaryBtn>Explore Resume Packages</PrimaryBtn>
        </Flex>
      </Container>
    </Background>
  );
};

export default NeedHelp;
