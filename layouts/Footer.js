import { Container, Flex } from "@/components/generic";
import React from "react";
import styled from "styled-components";
import jobSeekersItems from "@/constants/jobSeekersItems";
import employersItems from "@/constants/employersItems";
import legalDocs from "@/constants/legalDocs";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import {
  LanguagesList,
  LanguagesSelected,
} from "@/components/dropdown-views/Languages";

const Outer = styled.footer`
  background-color: #230939;
  padding: 50px 0;
  color: #ffffff;
`;

const FooterLink = styled(Link)`
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s all ease;
`;

const H3 = styled.h3`
  font-size: 18px;
  color: #f2b12f;
`;

const Footer = () => {
  return (
    <Outer>
      <Container>
        <Flex $justify="space-between" $align="flex-start">
          <Dropdown DropdownComponent={<LanguagesList />}>
            <LanguagesSelected />
          </Dropdown>
          <Flex $direction="column" $gap={10} $align="flex-start">
            <H3>For Job Seekers</H3>
            {jobSeekersItems.map((item, index) => (
              <FooterLink href={item.value} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </Flex>
          <Flex $direction="column" $gap={10} $align="flex-start">
            <H3>For Employers</H3>
            {employersItems.map((item, index) => (
              <FooterLink href={item.value} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </Flex>
          <Flex $direction="column" $gap={10} $align="flex-start">
            <H3>Legal Documents</H3>
            {legalDocs.map((item, index) => (
              <FooterLink href={item.value} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Outer>
  );
};

export default Footer;
