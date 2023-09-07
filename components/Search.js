import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "./generic";
import { BiSearch } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { PrimaryBtn } from "./Buttons";

const Outer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(155, 15, 255, 0.5);
  padding: 10px;
  position: relative;
  background-color: #ffffff;
`;

const CustomInput = styled.input`
  border: none;
  outline: none;
  padding: 10px 5px;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  background-color: transparent;
  color: #000000;
  &::placeholder {
    color: #dedede;
  }
`;

const Line = styled.div`
  position: relative;
  align-self: flex-start;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 200px;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #dedede;
    opacity: 0.5;
  }
`;

const IconWrapper = styled.div`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = ({ onSearch = () => null }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div
      style={{
        padding: "25px",
      }}
    >
      <Outer>
        <Flex $gap={15}>
          <Flex $gap={15} $width="100%">
            <IconWrapper>
              <BiSearch size={22} color="#6e46ae" />
            </IconWrapper>
            <CustomInput
              placeholder="Search for Job Posting"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Flex>
          <Line />
          <Flex $gap={15} $width="100%">
            <IconWrapper>
              <IoLocationSharp size={22} color="#6e46ae" />
            </IconWrapper>
            <CustomInput
              placeholder="Search for Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </Flex>
          <PrimaryBtn onClick={() => onSearch({ search, location })}>
            Search
          </PrimaryBtn>
        </Flex>
      </Outer>
    </div>
  );
};

export default Search;
