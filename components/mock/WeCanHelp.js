import React from "react";
import styled from "styled-components";
import { Background, Container, Flex } from "../generic";
import Image from "next/image";
import { H2 } from "../Typography";
import { BsArrowRight } from "react-icons/bs";

const ImageWrapper = styled.div`
  border-radius: 0 15px 15px 15px;
  box-shadow: 7px 7px 0px 5px rgba(155, 15, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    border-radius: 0 15px 15px 15px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #b869b3;
  width: 40px;
  height: 40px;
`;

const Item = styled.div`
  padding: 15px;
  border: 1px solid #6e46ae;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #6e46ae;
  }
`;

const mockArray = [
  "Visit the website",
  "Call us",
  "Send us an email",
  "Send us a message",
];

const WeCanHelp = () => {
  return (
    <Background $color="#3D2462">
      <Container $pt={80} $pb={80}>
        <Flex $justify="space-between" $align="center">
          <ImageWrapper>
            <Image
              src="/mock-images/mock-1.jpg"
              width={550}
              height={400}
              priority
              alt="Giorgos"
            />
          </ImageWrapper>
          <Flex $direction="column" $align="flex-start">
            <H2 $color="#ffffff" $mb={20}>
              We can help you find the right person for the job
            </H2>
            <Flex
              $direction="column"
              $align="flex-start"
              $width="100%"
              $gap={20}
            >
              {mockArray.map((item, index) => (
                <Item key={index}>
                  <p>{item}</p>
                  <IconWrapper>
                    <BsArrowRight size={22} color="#ffffff" />
                  </IconWrapper>
                </Item>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Background>
  );
};

export default WeCanHelp;
