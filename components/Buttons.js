import React from "react";
import styled from "styled-components";

const PrimarySc = styled.button`
  background-color: #6e46ae;
  color: #fff;
  padding: 7px 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: 0.3s all ease;
  &:hover {
    background-color: #8a61ca;
  }
`;

/**
 * Button component
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - The props for the Button component
 * @returns {React.ReactElement<HTMLButtonElement, string>}
 */
const PrimaryBtn = ({ children, ...rest }) => {
  return <PrimarySc {...rest}>{children}</PrimarySc>;
};

const SecondarySC = styled.button`
  background-color: #fcfcfc;
  color: #6e46ae;
  padding: 7px 10px;
  border: 2px solid #6e46ae15;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: 0.3s all ease;
  &:hover {
    border: 2px solid #6e46ae;
  }
`;

/**
 * Button component
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - The props for the Button component
 * @returns {React.ReactElement<HTMLButtonElement, string>}
 */
const SecondaryBtn = ({ children, ...rest }) => {
  return <SecondarySC {...rest}>{children}</SecondarySC>;
};

export { PrimaryBtn, SecondaryBtn };
