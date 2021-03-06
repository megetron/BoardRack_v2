import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

import { DefaultLogo, SmallLogo } from "../logo";
import NavItems from "./NavItems";
import SearchBar from "./SearchBar";
import DrawerIcon from "./DrawerIcon";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Container = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
`;

const index = () => {
  return (
    <Container>
      <DefaultLogo />
      <SmallLogo />
      <SearchBar />
      <NavItems />
      <DrawerIcon />
    </Container>
  );
};

export default index;
