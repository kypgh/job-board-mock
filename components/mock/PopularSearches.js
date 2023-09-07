import React from "react";
import styled from "styled-components";
import { Flex } from "../generic";
import { FiSearch } from "react-icons/fi";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  gap: 10px;
  font-weight: 700;
  color: #ffffff;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: all 0.1s ease-in;
  cursor: pointer;
  background-color: #3d2462;

  &:hover {
    background-color: transparent;
    border: 2px solid #3d2462;
  }
`;

const mockArray = [
  "Work from home",
  "Part time",
  "Internship",
  "Freelance",
  "Temporary",
  "Volunteer",
  "Administration",
  "Finance",
  "IT",
  "Marketing",
  "Sales",
  "Teaching",
  "Engineering",
  "Healthcare",
  "Hospitality",
];

const PopularSearches = () => {
  return (
    <>
      <p
        style={{
          color: "#ffffff",
        }}
      >
        Popular Searches
      </p>
      <Flex
        $justify="flex-start"
        $align="flex-start"
        $wrap="wrap"
        $gap={10}
        $pt={25}
        $pb={25}
      >
        {mockArray.map((item, index) => (
          <Item key={index}>
            <FiSearch color="#07A3A7" size={18} />
            <p>{item}</p>
          </Item>
        ))}
      </Flex>
    </>
  );
};

export default PopularSearches;
