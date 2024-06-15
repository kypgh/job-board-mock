import React from "react";
import { Background, Container, Flex } from "../../components/generic";
import { H1 } from "../../components/Typography";
import PackageItem from "../../components/mock/PackageItem";
import {
  BottomBasic,
  BottomDeluxe,
  BottomPremier,
} from "../../components/mock/BottomForPackages";
import Why from "../../components/mock/Why";
import Faq from "../../components/mock/Faq";
import SeeDifference from "../../components/mock/SeeDifference";
import GetBetter from "../../components/mock/GetBetter";

const mockArr = [
  {
    type: "BASIC",
    price: 150,
    hasDiscount: false,
    discountPercentage: 0,
    discountPrice: 0,
    description: "Basic Resume",
    features: [
      {
        Icon: "/mock-images/mock-1.jpg",
        title: "RESUME ONLY",
      },
    ],
    Bottom: <BottomBasic />,
  },
  {
    type: "DELUXE",
    price: 250,
    hasDiscount: true,
    discountPercentage: 20,
    discountPrice: 200,
    description: "Resume + Cover Letter",
    features: [
      {
        Icon: "/mock-images/mock-1.jpg",
        title: "RESUME",
      },
      {
        Icon: "/mock-images/mock-4.jpg",
        title: "COVER LETTER",
      },
    ],
    Bottom: <BottomDeluxe />,
  },
  {
    type: "PREMIER",
    price: 350,
    hasDiscount: false,
    discountPercentage: 0,
    discountPrice: 0,
    description: "Resume + Cover Letter + LinkedIn + Expedited Delivery",
    features: [
      {
        Icon: "/mock-images/mock-1.jpg",
        title: "RESUME",
      },
      {
        Icon: "/mock-images/mock-4.jpg",
        title: "COVER LETTER",
      },
      {
        Icon: "/mock-images/mock-5.jpg",
        title: "LINKEDIN MAKEOVER",
      },
    ],
    Bottom: <BottomPremier />,
  },
];

const ResumeHelpView = () => {
  return (
    <>
      <Background $color="#F2F2F2">
        <Container $pt={40} $pb={40}>
          <H1 $color="#000">OUR GOAL FOR YOU: MORE INTERVIEWS</H1>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "40px",
            }}
          >
            Hire one of Monster's experts and watch your resume open doors.
          </p>
          <Flex $justify="center" $align="stretch" $gap={20}>
            {mockArr.map((item, idx) => (
              <PackageItem data={item} key={idx} />
            ))}
          </Flex>
        </Container>
      </Background>
      <Why />
      <Faq />
      <SeeDifference />
      <GetBetter />
    </>
  );
};

export default ResumeHelpView;
