import React from "react";
import { H2 } from "../Typography";
import { Container, Flex } from "../generic";
import ArticleImage from "./ArticleImage";

const FeaturedArticles = () => {
  return (
    <>
      <Container $pt={80} $pb={80}>
        <H2 $mb={40}>Featured Articles</H2>
        <Flex $justify="space-between" $gap={25}>
          <ArticleImage
            width={600}
            height={400}
            src="/mock-images/featured1.png"
            alt="Featured Article 1"
            category="Job Search"
            title="5 Reasons You're Nervous About a New Job"
          />
          <ArticleImage
            width={600}
            height={400}
            src="/mock-images/featured2.png"
            alt="Featured Article 2"
            category="Cover Letters"
            title="How to write a cover letter"
          />
        </Flex>
      </Container>
    </>
  );
};

export default FeaturedArticles;
