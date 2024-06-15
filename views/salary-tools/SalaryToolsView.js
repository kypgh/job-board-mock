import Search from "@/components/Search";
import { H1, H2, H3 } from "@/components/Typography";
import { Background, Container, Flex } from "@/components/generic";
import ListItem from "@/components/mock/ListItem";
import PopularSearches from "@/components/mock/PopularSearches";
import React from "react";
import styled from "styled-components";

const SalaryToolsView = () => {
  return (
    <>
      <Background $color="#e9e7f7">
        <Container $pt={80} $pb={20}>
          <H1 $color="#212121de" $mb={25}>
            Calculate Your Salary
          </H1>
          <H3 $color="#212121de" $mb={25}>
            Get paid what you’re worth in today’s job market
          </H3>
          <Search />
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Want to search{" "}
            <span
              style={{
                color: "#5c6ac4",
              }}
            >
              salaries by major?
            </span>
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Powered by Burning Glass Technologies job market analytics
          </p>
        </Container>
      </Background>
      <Container $pt={40} $pb={40}>
        <H2 $color="#212121de" $mb={25}>
          Negotiate Like a Pro!
        </H2>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "40px",
          }}
        >
          These Monster resources can help you max out your salary.
        </p>
        <Flex $direction="column" $gap={25}>
          <ListItem
            author={"by Martina Mascali, Monster Contributor"}
            description={
              "Want to have one of the best-paying jobs in finance? Check o...View Article"
            }
            img={"/mock-images/mock-1.jpg"}
            title={"The Best-Paying Jobs in Finance"}
          />
          <ListItem
            author={"by Venus Gentile, Monster Contributor"}
            description={
              "The gender pay gap is a complicated issue that requires robu...View Article"
            }
            img={"/mock-images/mock-2.jpg"}
            title={"The Gender Pay Gap is Real"}
          />
          <ListItem
            author={"by Jennifer Verta, Monster Contributor"}
            description={
              "New careers keep emerging as old ones disappear. The world o...View Article"
            }
            img={"/mock-images/mock-3.jpg"}
            title={
              "Want to Work in One of The World’s New Careers? How The Job Market Has and Will Change"
            }
          />
        </Flex>
      </Container>
      <Background $bt="1px solid #dedede" $bb="1px solid #dedede">
        <Container $pt={40} $pb={40}>
          <H2 $color="#212121de" $mb={25}>
            Top Paying Jobs by Major
          </H2>
          <Search />
        </Container>
      </Background>
      <Container $pt={40} $pb={40}>
        <H2 $color="#212121de" $mb={25}>
          Popular Salary Searches
        </H2>
        <PopularSearches />
      </Container>
    </>
  );
};

export default SalaryToolsView;
