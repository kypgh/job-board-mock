import React from "react";
import { Background, Container, Flex } from "../generic";
import { H2 } from "../Typography";
import Image from "next/image";

const SeeDifference = () => {
  return (
    <Background $color="#E9E9F0">
      <Container $pt={80} $pb={80}>
        <H2 $align="center" $mb={25}>
          SEE THE DIFFERENCE A PROFESSIONAL RESUME MAKES
        </H2>
        <Flex $justify="space-between" $align="center" $gap={20}>
          <Image
            src="/mock-images/resume-1-before.jpg"
            width={550}
            height={800}
            alt="image"
          />
          <Image
            src="/mock-images/resume-1-after.jpg"
            width={550}
            height={800}
            alt="image"
          />
        </Flex>
      </Container>
    </Background>
  );
};

export default SeeDifference;
