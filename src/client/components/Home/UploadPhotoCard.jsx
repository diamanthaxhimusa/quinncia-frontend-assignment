import React from "react";
import styled from "styled-components";

import CardImage from "../../../../assets/card.svg";
import colors from "../../utils/theme/colors";
import { CardWrapper } from "../common/Card";

const Card = styled.img`
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
`;

const Title = styled.h3`
  margin: 0px;
  color: ${colors.white};
`;

const Description = styled.span`
  font-size: 14px;
  color: ${colors.lightGrey};
`;

const UploadPhotoCard = () => {
  return (
    <CardWrapper to="/add">
      <Card src={CardImage} alt="" />
      <TextWrapper>
        <Title>Upload a photo</Title>
        <Description>Upload your favorite photo to share with your friends and other people.</Description>
      </TextWrapper>
    </CardWrapper>
  );
};

export default UploadPhotoCard;
