import { BsCheck2Circle } from "react-icons/bs";
import { H3, Li, Ul } from "../Typography";
import { Flex } from "../generic";
import styled from "styled-components";

const SmallH3 = styled(H3).attrs({
  $color: "#000",
  $align: "left",
  style: {
    fontSize: "14px",
  },
})``;

const Same = () => (
  <>
    <SmallH3>
      Resume professionally written by a Certified Resume Writer
    </SmallH3>
    <Ul position="top" Prefix={<BsCheck2Circle color="green" size={20} />}>
      <Li>Custom resume unique to your skills and career goals</Li>
      <Li>Keyword-rich to match job postings</Li>
      <Li>Optimized to pass recruiters’ screening software</Li>
      <Li>Written by experts familiar with your industry</Li>
      <Li>Provided in Word format</Li>
    </Ul>
  </>
);

export const BottomBasic = () => {
  return (
    <Flex
      $justify="flex-start"
      $align="flex-start"
      $direction="column"
      $gap={10}
    >
      <Same />
      <SmallH3>Delivered in 5 business days</SmallH3>
      <SmallH3>
        60-day 100% satisfaction guarantee. If you’re not happy, we’ll rewrite
        it for free.
      </SmallH3>
    </Flex>
  );
};

const SameExtended = () => (
  <>
    <Same />
    <SmallH3>Cover letter for one target job title</SmallH3>
    <Ul position="top" Prefix={<BsCheck2Circle color="green" size={20} />}>
      <Li>Expertly written to capture an employer’s attention</Li>
      <Li>Showcases your unique value proposition</Li>
      <Li>Provides a compelling call to action</Li>
    </Ul>
  </>
);

export const BottomDeluxe = () => {
  return (
    <Flex
      $justify="flex-start"
      $align="flex-start"
      $direction="column"
      $gap={10}
    >
      <SameExtended />
      <SmallH3>Delivered in 5 business days</SmallH3>
      <SmallH3>
        60-day 100% satisfaction guarantee. If you’re not happy, we’ll rewrite
        it for free.
      </SmallH3>
      <SmallH3>*10% off original price of $219</SmallH3>
    </Flex>
  );
};

export const BottomPremier = () => {
  return (
    <Flex
      $justify="flex-start"
      $align="flex-start"
      $direction="column"
      $gap={10}
    >
      <SameExtended />
      <SmallH3>LinkedIn makeover</SmallH3>
      <Ul position="top" Prefix={<BsCheck2Circle color="green" size={20} />}>
        <Li>Includes a professional summary to reflect your strengths</Li>
        <Li>Search optimized with keywords that highlight your top skills</Li>
        <Li>Helps you create a consistent professional image and brand</Li>
      </Ul>
      <SmallH3>
        60-day 100% satisfaction guarantee. If you’re not happy, we’ll rewrite
        it for free.
      </SmallH3>
      <SmallH3>*10% off original price of $219</SmallH3>
    </Flex>
  );
};
