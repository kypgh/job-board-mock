import flagsConfig from "@/configs/flagsConfig";
import React from "react";
import { SVGFlag } from "../Flags/dist";
import styled from "styled-components";

const ListOuter = styled.div`
  background-color: #ffffff;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  transition: 0.3s all ease;
  color: #000000;
  font-weight: 600;
  gap: 7px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const LanguagesList = () => {
  return (
    <ListOuter>
      {flagsConfig.map((el, idx) => (
        <ListItem key={idx}>
          <SVGFlag country={el.flag} flagWidth="40" />
          {el.des}
        </ListItem>
      ))}
    </ListOuter>
  );
};

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3d2462;
  border: 1px solid #ffffff25;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
`;

export const LanguagesSelected = () => {
  return (
    <SelectedItem>
      <SVGFlag flagWidth="40" country={flagsConfig[0].flag} />
      {flagsConfig[0].des}
    </SelectedItem>
  );
};
