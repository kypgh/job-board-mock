import React from "react";
import { Container, Flex } from "../generic";
import { H1 } from "../Typography";
import Image from "next/image";
import styled from "styled-components";

const NewImage = styled(Image)`
  aspect-ratio: 16 / 9;
  height: auto;
  object-fit: contain;
`;

const Line = styled.div`
  width: 100px;
  height: 5px;
  background-color: #007d91;
  margin: auto;
  margin-top: -40px;
  margin-bottom: 20px;
`;

const Trust = () => {
  return (
    <Container $pt={80} $pb={80}>
      <Line />
      <H1 $mb={25}>Companies Trust Monster.</H1>
      <Flex $gap={40}>
        <NewImage
          src="/mock-images/trust-1.png"
          width={200}
          height={100}
          alt="icon"
        />
        <NewImage
          src="/mock-images/trust-2.png"
          width={200}
          height={100}
          alt="icon"
        />
        <NewImage
          src="/mock-images/trust-3.png"
          width={200}
          height={100}
          alt="icon"
        />
        <NewImage
          src="/mock-images/trust-4.png"
          width={200}
          height={100}
          alt="icon"
        />
        <NewImage
          src="/mock-images/trust-5.png"
          width={200}
          height={100}
          alt="icon"
        />
      </Flex>
    </Container>
  );
};

export default Trust;
