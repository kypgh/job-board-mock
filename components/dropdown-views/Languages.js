import flagsConfig from "@/configs/flagsConfig";
import React from "react";
import { SVGFlag } from "../Flags/dist";
import styled from "styled-components";

export const LanguagesList = () => {
  return (
    <div>
      {flagsConfig.map((el, idx) => (
        <div key={idx}>
          <SVGFlag country={el.flag} flagWidth="40" />
          {el.des}
        </div>
      ))}
    </div>
  );
};

export const LanguagesSelected = () => {
  return (
    <div>
      <SVGFlag flagWidth="40" country={flagsConfig[0].flag} />
      {flagsConfig[0].des}
    </div>
  );
};
