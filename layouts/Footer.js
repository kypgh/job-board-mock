import { Container, Flex } from "@/components/generic";
import React from "react";
import styled from "styled-components";
import jobSeekersItems from "@/configs/jobSeekersItems";
import employersItems from "@/configs/employersItems";
import legalDocs from "@/configs/legalDocs";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import {
  LanguagesList,
  LanguagesSelected,
} from "@/components/dropdown-views/Languages";
import Image from "next/image";
import { H3 } from "@/components/Typography";

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

const Footer = () => {
  return (
    <Outer>
      <Container>
        <Flex $justify="space-between" $align="flex-start">
          <Dropdown DropdownComponent={<LanguagesList />}>
            <LanguagesSelected />
          </Dropdown>
          <Flex $direction="column" $gap={10} $align="flex-start">
            <H3 $color="#f2b12f">For Job Seekers</H3>
            {jobSeekersItems.map((item, index) => (
              <FooterLink href={item.value} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </Flex>
          <Flex $direction="column" $gap={10} $align="flex-start">
            <H3 $color="#f2b12f">For Employers</H3>
            {employersItems.map((item, index) => (
              <FooterLink href={item.value} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </Flex>
          <Flex $direction="column" $gap={10} $align="flex-start">
            <H3 $color="#f2b12f">Legal Documents</H3>
            {legalDocs.map((item, index) => (
              <FooterLink href={item.value} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </Flex>
        </Flex>
        <Flex $justify="center" $align="flex-start" $gap={80} $mt={50}>
          <Flex $direction="column" $align="flex-start" $gap={40}>
            <Flex $direction="column" $gap={10} $align="flex-start">
              <p>Find us on social media:</p>
              <Flex $gap={10}>
                <Image
                  src="/images/facebook.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <Image
                  src="/images/youtube.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <Image
                  src="/images/twitter.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <Image
                  src="/images/linkedin.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <Image
                  src="/images/instagram.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Flex>
            </Flex>
            <Flex $direction="column" $gap={20}>
              <p>© 2023 Monster Worldwide</p>
              <p>Looking for Monster Cable?</p>
            </Flex>
          </Flex>
          <Flex $direction="column" $align="flex-start" $gap={40}>
            <div>
              <p>Get the Monster App</p>
              <Flex $gap={10}>
                <Image
                  src="/mock-images/app-store.png"
                  width={150}
                  height={60}
                  alt="appstore"
                />
                <Image
                  src="/mock-images/google-play.png"
                  width={150}
                  height={45}
                  alt="googleplay"
                />
              </Flex>
            </div>
            <div>
              <Image
                src="/mock-images/trust.svg"
                width={150}
                height={60}
                alt="icon"
              />
            </div>
          </Flex>
        </Flex>
      </Container>
    </Outer>
  );
};

export default Footer;
