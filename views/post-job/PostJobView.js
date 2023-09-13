import React from "react";
import styled from "styled-components";
import { H1 } from "../../components/Typography";
import { Background, Container, Flex } from "../../components/generic";
import { PrimaryBtn } from "../../components/Buttons";
import Delivers from "../../components/mock/Delivers";
import Trust from "../../components/mock/Trust";

const NewBG = styled(Background)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  /* &::before {
    content: "";
    position: absolute;
    background: linear-gradient(230deg, rgba(0, 0, 0, 0.1), transparent 40%);
    bottom: 0;
    left: auto;
    right: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), transparent);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    overflow-wrap: break-word;
  } */
`;

const Title = styled(H1).attrs({
  style: {
    fontSize: "60px",
    fontWeight: 800,
  },
})`
  max-width: 440px;
`;

const CusP = styled.p`
  font-size: 20px;
  color: #fff;
  max-width: 440px;
`;

const PostJobView = () => {
  return (
    <>
      <NewBG $img="/mock-images/mock-bg.jpg">
        <Container $pt={80} $pb={80}>
          <Flex $align="flex-start" $gap={40} $direction="column">
            <Title $align="left" $color="#fff">
              Make your next hire with Monster+
            </Title>
            <CusP>
              We can help you expand your reach and get your jobs in front of
              the right candidates.
            </CusP>
            <PrimaryBtn>SIGN UP NOW</PrimaryBtn>
          </Flex>
        </Container>
      </NewBG>
      <Delivers />
      <Trust />
    </>
  );
};

export default PostJobView;
