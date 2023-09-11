import React from "react";
import { Flex } from "../generic";
import Image from "next/image";
import { H3 } from "../Typography";

const BrowseAdvice = ({ data }) => {
  return (
    <Flex
      $direction="column"
      $justify="flex-start"
      $align="flex-start"
      $gap={10}
    >
      {data.map((item, index) => (
        <Flex key={index} $justify="flex-start" $align="flex-start" $gap={10}>
          <Image
            src={item.image}
            width={70}
            height={70}
            style={{
              borrderRadius: 5,
            }}
            alt="Image"
          />
          <H3 $color="#0091BF" $align="left">
            {item.title}
          </H3>
        </Flex>
      ))}
      <H3 $color="#0091BF">View All</H3>
    </Flex>
  );
};

export default BrowseAdvice;
