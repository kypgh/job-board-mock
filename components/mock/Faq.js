import React from "react";
import { TbPencilStar } from "react-icons/tb";
import { GiStarFormation, GiAlliedStar } from "react-icons/gi";
import { RiFileSettingsLine } from "react-icons/ri";
import { Background, Container, Flex } from "../generic";
import { H1, H2 } from "../Typography";

const mockArr = [
  {
    Icon: <TbPencilStar />,
    question: "What does “professional resume writer” mean?",
    answer:
      "All our professional resume writers are certified and have received specialized training through our professional development programs. In addition, they bring many years of experience as human resources and recruiting professionals in a variety of industries and locations around the country.",
  },
  {
    Icon: <GiStarFormation />,
    question: "Do you guarantee your work?",
    answer:
      "Yes. We provide a 60-day 100% satisfaction guarantee. If you’re not completely satisfied with your resume, LinkedIn profile, or cover letter, we’ll rewrite it for free. For all packages, we provide a first draft for your review and one revision incorporating your feedback.",
  },
  {
    Icon: <RiFileSettingsLine />,
    question: "Is every resume truly customized?",
    answer:
      "Yes. Our resume writers will conduct a comprehensive review of your experience and career goals to craft a resume that reflects your unique value proposition and highlights your skills and accomplishments.",
  },
  {
    Icon: <GiAlliedStar />,
    question: "What is the benefit of having a professionally-written resume?",
    answer:
      "Even the most qualified applicants can get passed over for positions for which they are a perfect fit because of a poorly written or keyword-poor resume. After all, recruiters and hiring managers will never see a resume that doesn’t pass the online screening filters.",
  },
];

const Faq = () => {
  return (
    <Background $color="#E9E9F0">
      <Container $pt={80} $pb={80}>
        <H1 $align="center" $mb={25}>
          FREQUENTLY ASKED QUESTIONS
        </H1>
        <Flex $align="flex-start" $justify="space-between" $gap={20}>
          {mockArr.map((item, index) => (
            <Flex $direction="column" $gap={10} key={index}>
              {item.Icon}
              <H2>Q: {item.question}</H2>
              <p>A: {item.answer}</p>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Background>
  );
};

export default Faq;
