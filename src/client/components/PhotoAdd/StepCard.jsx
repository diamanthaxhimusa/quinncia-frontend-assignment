import React from "react";
import styled from "styled-components";

import StepNumber from "./StepNumber";
import colors from "../../utils/theme/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 50px;
  @media(max-width: 658px) {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.black};
  margin-bottom: 16px;
`;

const Description = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.darkGrey};
`;

const StepCard = ({ step, title, description }) => {
  return (
    <Wrapper>
      <StepNumber step={step} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default StepCard;
