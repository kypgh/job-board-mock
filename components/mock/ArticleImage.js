import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { H2 } from "../Typography";

const Relative = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Absolute = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;

  & > p {
    background-color: #c47dbf;
    padding: 3px 7px;
    border-radius: 3px;
    width: fit-content;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }
`;

const ArticleImage = ({ width, height, src, alt = "", category, title }) => {
  return (
    <Relative>
      <Image width={width} height={height} src={src} alt={alt} />
      <Absolute>
        <p>{category}</p>
        <H2 $color="#ffffff" $align="left">
          {title}
        </H2>
      </Absolute>
    </Relative>
  );
};

export default ArticleImage;
