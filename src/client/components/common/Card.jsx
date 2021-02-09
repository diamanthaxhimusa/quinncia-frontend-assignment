import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/theme/colors";

const getCardSize = (size) => {
  switch (size) {
    case "big":
      return { width: "100%", height: "367px" };
    case "small":
      return { width: "150px", height: "67px" };
    default:
      return { width: "300px", height: "167px" };
  }
};

export const CardWrapper = styled(Link)`
  background-color: ${colors.purple};
  background-image: url(${({ background }) => background});
  background-size: cover;
  ${({ size }) => getCardSize(size)};
  border-radius: 10px;
  box-shadow: 2px 2px 10px -4px #000000a6;
  position: relative;
  text-decoration: none;
`;

const Card = ({ to, image, size }) => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    if (!image) return;
    import(`../../../../storage/photo-${image}.png`).then(
      ({ default: src }) => {
        setImg(src);
      }
    );
  }, [image]);
  return (
    <CardWrapper to={to} size={size} background={img}>
      {!img && <div>loading</div>}
    </CardWrapper>
  );
};

export default Card;
