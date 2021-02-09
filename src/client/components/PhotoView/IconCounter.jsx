import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
  color: ${({ color }) => color};
  text-decoration: none;
  cursor: pointer;
  padding: 5px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

const IconCounter = ({ icon, count, color }) => {
  return (
    <Wrapper color={color}>
      <Icon src={icon} />
      {count}
    </Wrapper>
  );
};

export default IconCounter;
