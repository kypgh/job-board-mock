import React from "react";
import styled from "styled-components";
import { Flex } from "../generic";
import Image from "next/image";
import { H2, H3 } from "../Typography";

const ListItem = ({ img, title, author, description, url }) => {
  return (
    <Flex
      $gap={25}
      style={{
        maxWidth: "750px",
        width: "100%",
      }}
    >
      <Image src={img} alt={title} width={150} height={140} />
      <Flex
        $direction="column"
        $justify="flex-start"
        $align="flex-start"
        $gap={10}
        style={{
          width: "100%",
        }}
      >
        <H2 $color="#6e46ae" $align="left">
          {title}
        </H2>
        <H3>{author}</H3>
        <p>
          {description?.slice(0, 60)}
          <span
            style={{
              color: "#6e46ae",
            }}
          >
            ...View Article
          </span>
        </p>
      </Flex>
    </Flex>
  );
};

export default ListItem;
