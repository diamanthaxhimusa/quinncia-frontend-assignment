import React from "react";
import styled from "styled-components";

import SearchIcon from "../../../../assets/icons/search.svg";
import colors from "../../utils/theme/colors";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  background: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: 5px;
  outline: none;
`;

const Icon = styled.img`
  position: absolute;
  left: 10px;
  height: 20px;
`;

const SearchBar = () => {
  return (
    <Wrapper type="text">
      <Input type="text"/>
      <Icon src={SearchIcon} alt="search" />
    </Wrapper>
  );
};

export default SearchBar;
