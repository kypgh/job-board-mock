import React from "react";
import styled from "styled-components";
import { Background, Container, Flex } from "../generic";
import { H2 } from "../Typography";
import Image from "next/image";

const Left = styled.div`
  background-color: #3d2462;
  padding: 80px 20px;
  flex: 1;

  & img {
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 15px 0;
`;

const Right = styled.div`
  background-color: #230938;
  padding: 80px 20px;
  flex: 1;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin-bottom: -80px;
  }
`;

const GetApp = () => {
  return (
    <Container $pb={80}>
      <Flex
        $justify="space-between"
        $align="flex-start"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Left>
          <H2 $color="#ffffff" $align="left">
            Get the app
          </H2>
          <Text>
            Get the power of George on-the-go, featuring one-touch apply.
          </Text>
          <Flex $justify="flex-start" $align="center" $gap={25}>
            <Image
              src="/mock-images/app-store.png"
              width={250}
              height={120}
              alt="George"
            />
            <Image
              src="/mock-images/google-play.png"
              width={250}
              height={95}
              alt="George"
            />
          </Flex>
        </Left>
        <Right>
          <Image
            src="/mock-images/mock-6.jpg"
            width={500}
            height={286}
            alt="George"
          />
        </Right>
      </Flex>
    </Container>
  );
};

export default GetApp;
