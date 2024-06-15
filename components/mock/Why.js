import React from "react";
import { Background, Container, Flex } from "../generic";
import { H1, H2 } from "../Typography";
import { BiLike, BiTrophy } from "react-icons/bi";
import { AiOutlineIdcard } from "react-icons/ai";
import styled from "styled-components";

const CusH2 = styled(H2).attrs({
  style: {
    fontSize: "60px",
    fontWeight: 400,
  },
})``;

const FlexInner = styled(Flex)`
  flex: 1;
`;

const Why = () => {
  return (
    <Background $color="#f2f2f2">
      <Container $pt={80} $pb={80}>
        <H1 $align="center" $mb={25}>
          WHY MONSTER
        </H1>
        <Flex $justify="space-evenly" $align="stretch" $gap={20}>
          <FlexInner $direction="column" $align="center" $gap={10}>
            <BiLike size={50} color="#642891" />
            <CusH2>100%</CusH2>
            <p>satisfaction or we'll rewrite it for free</p>
          </FlexInner>
          <FlexInner $direction="column" $align="center" $gap={10}>
            <AiOutlineIdcard size={50} color="#642891" />
            <CusH2>11M+</CusH2>
            <p>resumes submitted each year</p>
          </FlexInner>
          <FlexInner $direction="column" $align="center" $gap={10}>
            <BiTrophy size={50} color="#642891" />
            <CusH2>
              20+{" "}
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                years
              </span>
            </CusH2>
            <p>Industry expertise</p>
          </FlexInner>
        </Flex>
      </Container>
    </Background>
  );
};

export default Why;
