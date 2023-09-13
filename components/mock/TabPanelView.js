import React from "react";
import { Container, Flex } from "../generic";
import Image from "next/image";
import { H1 } from "../Typography";
import { PrimaryBtn } from "../Buttons";

const TabPanelView = ({ img, title, description }) => {
  return (
    <Container $pall={50}>
      <Flex $align="stretch" $gap={40}>
        <Image
          src={img}
          alt={title}
          width={420}
          height={320}
          priority
          style={{
            minWidth: "420px",
          }}
        />
        <Flex
          $direction="column"
          $align="flex-start"
          $justify="space-between"
          $gap={40}
        >
          <Flex $direction="column" $align="flex-start" $gap={20}>
            <H1 $align="left">{title}</H1>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "400",
              }}
            >
              {description}
            </p>
          </Flex>
          <PrimaryBtn>Get Started Now</PrimaryBtn>
        </Flex>
      </Flex>
    </Container>
  );
};

export default TabPanelView;
