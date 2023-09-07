import { Container, Flex } from "@/components/generic";
import React from "react";
import styled from "styled-components";
import navItems from "@/constants/navItems";
import { logo } from "@/configs/images";
import Image from "next/image";
import { PrimaryBtn, SecondaryBtn } from "@/components/Buttons";
import Link from "next/link";
import { internalLinks } from "@/constants/links";
import { BsArrowRight } from "react-icons/bs";

const Nav = styled.nav`
  max-width: 100%;
  width: 100%;
  background-color: #ffffff;
  text-align: center;
`;

const NavBG = styled.div`
  background-color: #f2f2f2;
`;

const NavRow = styled(Flex)`
  padding: 20px 0;
`;

const NavItem = styled(Link)`
  color: #000;
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s all ease;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #6e46ae;
  }
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navigation = () => {
  return (
    <Nav>
      <Container
        style={{
          padding: "20px 0",
        }}
      >
        <Flex $justify="space-between" $width="100%">
          <Link href={internalLinks.home}>
            <Image src={logo} width={50} height={50} alt="logo" />
          </Link>
          <Flex $gap={5}>
            <UnstyledLink href={internalLinks.login}>
              <PrimaryBtn>Login</PrimaryBtn>
            </UnstyledLink>
            <UnstyledLink href={internalLinks.signup}>
              <SecondaryBtn>Sign up</SecondaryBtn>
            </UnstyledLink>
          </Flex>
        </Flex>
      </Container>
      <NavBG>
        <Container>
          <NavRow $justify="space-between" $width="100%">
            <Flex $justify="flex-start" $gap={25}>
              {navItems.map((item) => (
                <NavItem key={item.value} href={item.value}>
                  {item.label}
                </NavItem>
              ))}
            </Flex>
            <Flex $gap={5}>
              <NavItem href={internalLinks.postJob}>Post job</NavItem>
              <BsArrowRight size={16} color="#6e46ae" />
            </Flex>
          </NavRow>
        </Container>
      </NavBG>
    </Nav>
  );
};

export default Navigation;
