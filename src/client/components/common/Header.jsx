import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import Logo from "../../../../assets/logo.svg";
import Back from "../../../../assets/icons/arrow-left.svg";

const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;  
  @media(max-width: 658px) {
    flex-direction: column;
    &>img {
      margin: auto  
      margin-bottom: 36px;
    }
  }
`;

const Img = styled.img`
  width: 200px;
  @media(min-width: 984px) {
    margin-right: 162px;
  }
  @media(min-width: 658px) {
    margin-right: 100px;
  }
`;

const Header = ({ noSearch }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Img src={Logo} alt="photo share logo" />
      </Link>
      {!noSearch && <SearchBar />}
    </Wrapper>
  );
};

export default Header;
