import { PrimaryBtn } from "@/components/Buttons";
import Collapse from "@/components/Collapse";
import Search from "@/components/Search";
import { H1, H2 } from "@/components/Typography";
import BrowseAdvice from "@/components/collapse-views/BrowseAdvice";
import { Background, Container, Flex } from "@/components/generic";
import FeaturedArticles from "@/components/mock/FeaturedArticles";
import ListItem from "@/components/mock/ListItem";
import PopularSearches from "@/components/mock/PopularSearches";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Right = styled.div`
  max-width: 350px;
  width: 100%;
`;
const LeftSC = styled.div`
  max-width: calc(100% - 350px);
  width: 100%;
`;

const Ad = styled(Flex)`
  background-color: #3d2462;
  padding: 20px;
  border-radius: 15px;
`;

const AdText = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;

  & > span {
    color: #f2b127;
  }
`;

const mockArray = [
  {
    image: "/mock-images/mock-1.jpg",
    title: "What Information Can an Ex-Employer Give Out in a Reference?",
  },
  {
    image: "/mock-images/mock-2.jpg",
    title: "How to Network in College and Future-Proof Your Career",
  },
  {
    image: "/mock-images/mock-3.jpg",
    title:
      "What is a Professional Reference and How Can it Help You Secure a Job?",
  },
];

const leftArr = [
  {
    title: "Resume Examples by Industry",
    description:
      "A resume is a document that provides the reader with information about your relevant skills, qualifications and experience.",
    img: "/mock-images/mock-1.jpg",
    author: "By Monster Staff",
  },
  {
    title: "Action Verbs Can Power Your Resume",
    description:
      "A resume is a document that provides the reader with information about your relevant skills, qualifications and experience.",
    img: "/mock-images/mock-2.jpg",
    author: "By Caroline Zaayer Kaufman, Monster contributor",
  },
  {
    title: "The 10 Worst Resume Mistakes to Avoid",
    description:
      "A resume is a document that provides the reader with information about your relevant skills, qualifications and experience.",
    img: "/mock-images/mock-3.jpg",
    author: "By Peter Vogt, Monster contributor",
  },
];

const CareerAdviceView = () => {
  return (
    <>
      <Background $color="#00788C">
        <Container $pt={80} $pb={80}>
          <H1 $color="#ffffff" $align="left">
            Career Advice
          </H1>
          <Search />
          <PopularSearches />
        </Container>
      </Background>
      <FeaturedArticles />
      <Container $pt={20} $pb={20}>
        <Flex $justify="space-between" $align="flex-start" $gap={25}>
          <LeftSC>
            <Left
              category={"COLLECTION"}
              title={"Write an Effective Resume"}
              data={leftArr}
            />
            <Left
              category={"COLLECTION"}
              title={"Find Your Perfect Job"}
              data={leftArr}
            />
            <Left
              category={"COLLECTION"}
              title={"Latest Articles"}
              data={leftArr}
            />
          </LeftSC>
          <Right>
            <Ad $direction="column" $justify="center" $align="center">
              <AdText>
                Get great content like this and{" "}
                <span>the hottest jobs delivered to your inbox.</span>
              </AdText>
              <PrimaryBtn
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                Sign Up Now
              </PrimaryBtn>
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Logo"
              />
            </Ad>
            <p
              style={{
                marginTop: 20,
                marginBottom: 20,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              BROWSE ADVICE ARTICLES
            </p>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Job Search
            </Collapse>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Career Paths
            </Collapse>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Resumes
            </Collapse>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Career Development
            </Collapse>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Leaving a Job
            </Collapse>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Interviewing
            </Collapse>
            <Collapse CollapsedView={<BrowseAdvice data={mockArray} />}>
              Cover Letters
            </Collapse>
          </Right>
        </Flex>
      </Container>
    </>
  );
};

const OuterLeft = styled.div`
  padding: 20px 0;
`;

const Left = ({ category, title, data }) => {
  return (
    <OuterLeft>
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {category}
      </p>
      <H2 $align="left" $mt={15}>
        {title}
      </H2>
      {data.map((item, index) => (
        <Background
          key={index}
          $bb="1px solid #dedede"
          $pb={25}
          $pt={25}
          style={{
            marginTop: 20,
          }}
        >
          <ListItem
            title={item.title}
            description={item.description}
            img={item.img}
            author={item.author}
          />
        </Background>
      ))}
    </OuterLeft>
  );
};

export default CareerAdviceView;
