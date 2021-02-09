import React from "react";
import styled from "styled-components";
import colors from "../../utils/theme/colors";

const Btn = styled.button`
  outline: none;
  border-radius: 5px;
  box-shadow: none;
  background-color: ${colors.purple};
  color: ${colors.white};
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Button = ({ title, ...props }) => {
  return <Btn {...props}>{title}</Btn>;
};

export default Button;
