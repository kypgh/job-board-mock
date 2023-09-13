import React from "react";
import { Container, Flex } from "../generic";
import styled from "styled-components";
import Image from "next/image";
import { H2, H3, Li, Ul } from "../Typography";
import { BsCheckCircle } from "react-icons/bs";
import { PrimaryBtn } from "../Buttons";

const Left = styled(Flex)`
  flex: 1;
`;

const Right = styled(Flex)`
  flex: 1;
`;

const Line = styled.div`
  background-color: #00788c;
  width: 150px;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  border-radius: 0 15px 15px 15px;
  box-shadow: 7px 7px 0px 5px #f2b127;
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
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #00788c;
  padding: 3px;
  flex: 1;
`;

const CompaniesResearching = () => {
  return (
    <Container $pt={80} $pb={80}>
      <Flex $justify="space-between" $align="flex-start" $gap={80}>
        <Left>
          <ImageWrapper>
            <Image
              src="/mock-images/mock-4.jpg"
              width={450}
              height={450}
              alt=""
              priority
            />
          </ImageWrapper>
        </Left>
        <Right $direction="column" $gap={20} $align="flex-start">
          <H2
            $align="left"
            $color="#424242"
            style={{
              maxWidth: "350px",
            }}
          >
            14,000+ companies are researching resumes on Monster*
          </H2>
          <H3 $align="left">We'll help you get noticed</H3>
          <Line />
          <p>
            In our recent survey, recruiters told us that resume search is the
            top tool they use to find the best candidates. Post your resume on
            Monster today to ensure recruiters and hiring managers can easily
            find you.
          </p>
          <H3>By uploading your resume, you'll also:</H3>
          <Ul
            Prefix={
              <IconWrapper>
                <BsCheckCircle color="#ffffff" />
              </IconWrapper>
            }
          >
            <Li>Receive recommended jobs in your inbox</Li>
            <Li>Be able to easily apply for thousands of jobs</Li>
            <Li>Receive a free professional assessment of your resume</Li>
          </Ul>
          <PrimaryBtn>Upload Your Resume</PrimaryBtn>
          <p
            style={{
              fontSize: "12px",
              color: "#00788c",
            }}
          >
            We are committed to protecting your privacy and always strive to
            provide a safe user experience.
          </p>
          <Ul
            position="top"
            Prefix={
              <span
                style={{
                  fontSize: "12px",
                  color: "#00788c",
                }}
              >
                *
              </span>
            }
          >
            <Li>
              Number of Active Global SearchMonster Customers, PowerBI Dec 2021
            </Li>
            <Li>Monster Future of Work: 2022 Outlook Survey</Li>
          </Ul>
        </Right>
      </Flex>
    </Container>
  );
};

export default CompaniesResearching;
