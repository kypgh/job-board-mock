import { PrimaryBtn } from "@/components/Buttons";
import Search from "@/components/Search";
import { H1 } from "@/components/Typography";
import { Background, Container, Flex } from "@/components/generic";
import CompaniesResearching from "@/components/mock/CompaniesResearching";
import React from "react";
import NeedHelp from "../../components/mock/NeedHelp";

const UploadResumeView = () => {
  return (
    <>
      <Background $img="/mock-images/mock-bg.svg">
        <Container $pt={80} $pb={80}>
          <Search />
          <Flex $justify="center" $align="center" $direction="column" $gap={20}>
            <H1 $color="#fff">Upload Resume</H1>
            <p
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              and let the right job find you!
            </p>
            <PrimaryBtn
              style={{
                marginTop: "20px",
              }}
            >
              Upload Your Resume
            </PrimaryBtn>
          </Flex>
        </Container>
      </Background>
      <CompaniesResearching />
      <NeedHelp />
    </>
  );
};

export default UploadResumeView;
