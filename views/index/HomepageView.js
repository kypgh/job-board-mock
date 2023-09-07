import Search from "@/components/Search";
import { Container, Background } from "@/components/generic";
import GetApp from "@/components/mock/GetApp";
import PopularSearches from "@/components/mock/PopularSearches";
import TopCareerAdvise from "@/components/mock/TopCareerAdvise";
import WeCanHelp from "@/components/mock/WeCanHelp";
import React from "react";

const HomepageView = () => {
  return (
    <>
      <Background $color="#230939">
        <Container>
          <Search />
          <PopularSearches />
        </Container>
      </Background>
      <WeCanHelp />
      <TopCareerAdvise />
      <GetApp />
    </>
  );
};

export default HomepageView;
