import React from "react";
import styled from "styled-components";

import colors from "../../utils/theme/colors";

const Wrapper = styled.div`
  position: absolute;
  top: -40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: 100;
`;

const StepNumber = ({ step }) => {
  return <Wrapper>{step}</Wrapper>;
};

export default StepNumber;
