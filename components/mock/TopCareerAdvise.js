import React from "react";
import styled from "styled-components";
import { Background, Container, Flex } from "../generic";
import { H2 } from "../Typography";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Subtitle = styled(Flex)`
  cursor: pointer;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: #00788c;
    text-decoration: underline;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  padding: 7px;
  flex: 1;
  box-shadow: 0 0 10px rgba(50, 50, 50, 0.5);
  cursor: pointer;
  transition: all 0.1s ease-in;

  & > span {
    padding: 2px 5px;
    background-color: #00788c;
    border-radius: 5px;
    width: fit-content;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(50, 50, 50, 0.8);
  }
`;

const ImageWrapper = styled.div`
  min-height: 200px;
  position: relative;

  & > img {
    border-radius: 7px;
  }
`;

const mockArray = [
  {
    title: "How to write a CV",
    category: "Assessments",
    src: "/mock-images/mock-2.jpg",
  },
  {
    title: "How to write a CV",
    category: "Assessments",
    src: "/mock-images/mock-3.jpg",
  },
  {
    title: "How to write a CV",
    category: "Assessments",
    src: "/mock-images/mock-4.jpg",
  },
  {
    title: "How to write a CV",
    category: "Assessments",
    src: "/mock-images/mock-5.jpg",
  },
];

const TopCareerAdvise = () => {
  return (
    <Background>
      <Container $pt={80} $pb={80}>
        <H2>Top Career Advise</H2>
        <Subtitle $gap={10} $mb={25}>
          <p>BROWSE ADVISE</p>
          <BsArrowRight color="#00788C" size={22} />
        </Subtitle>
        <Flex $gap={20}>
          {mockArray.map((item, index) => (
            <Box key={index}>
              <ImageWrapper>
                <Image
                  src={item.src}
                  fill
                  priority
                  alt="Giorgos"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </ImageWrapper>
              <span>{item.category}</span>
              <p>{item.title}</p>
            </Box>
          ))}
        </Flex>
      </Container>
    </Background>
  );
};

export default TopCareerAdvise;
