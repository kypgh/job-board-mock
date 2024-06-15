import React from "react";
import { Background, Container, Flex } from "../generic";
import { H1 } from "../Typography";
import { Tabs, Tab, TabList, TabPanel } from "../Tabs";
import styled from "styled-components";
import TabPanelView from "./TabPanelView";

const NewTabList = styled(TabList)`
  display: flex;
  gap: 5px;
`;

const NewTab = styled(Tab)`
  background-color: #d5d3e4;
  color: #3d2462;
  padding: 15px;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  border: none;
  cursor: pointer;
  flex: 1;
  border-bottom: 5px solid ${({ isActive }) => (isActive ? "#fff" : "#3D2462")};

  &:disabled {
    background-color: #fff;
  }

  &::after {
    content: ${({ isActive }) => (isActive ? "''" : "none")};
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    height: 5px;
    background-color: ${({ $color }) => $color};
  }
`;

const PanelInner = styled.div`
  width: 100%;
  background-color: #fff;
`;

const mockArr = [
  {
    title: "Flexibility to hire the way you need to",
    description:
      "Promote your job posting and reach the most qualified job seekers. Monster+ Pro allows you to engage millions of active candidates with Monster’s Resume Search.",
    img: "/mock-images/tab-1.png",
  },
  {
    title: "Posting a job is now more efficient.",
    description:
      "We’ve improved the job posting process and built a new, intuitive dashboard so you can easily manage the hiring process.",
    img: "/mock-images/tab-2.png",
  },
  {
    title: "Discover top-tier job seekers with ease.",
    description:
      "Broaden your reach and connect with the most qualified job seekers. Your job posting will be published to Monster’s website, mobile app, and Monster’s extensive network of job boards and partner sites.",
    img: "/mock-images/tab-3.png",
  },

  {
    title: "Unlock a vast pool of skilled candidates.",
    description:
      "Your job posting will be automatically sent to candidates on Monster who are looking for similar roles.",
    img: "/mock-images/tab-4.png",
  },
];

const Delivers = () => {
  return (
    <Background $color="#3D2462">
      <Container $pt={80} $pb={80}>
        <Flex $direction="column">
          <H1 $color="#fff" $mb={25}>
            Monster Delivers.
          </H1>
          <Tabs>
            <NewTabList isTabList>
              <NewTab $color="#F09B1E">Find Quality Job Seekers</NewTab>
              <NewTab $color="#B557AF">Streamlined and Easier than Ever</NewTab>
              <NewTab $color="#6E46AE">Expand your Reach</NewTab>
              <NewTab $color="#82D296">Accelerate the Hiring Process</NewTab>
            </NewTabList>
            {mockArr.map((item, idx) => (
              <TabPanel key={idx}>
                <PanelInner>
                  <TabPanelView {...item} />
                </PanelInner>
              </TabPanel>
            ))}
          </Tabs>
        </Flex>
      </Container>
    </Background>
  );
};

export default Delivers;
