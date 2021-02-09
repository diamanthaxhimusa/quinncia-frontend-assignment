import React from "react";
import styled from "styled-components";

import colors from "../../utils/theme/colors";
import LikeIcon from "../../../../assets/icons/trending.svg";
import Comments from "../../../../assets/icons/chat.svg";
import IconCounter from "./IconCounter";
import Divider from "../common/Divider";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 10px;
`;

const Actions = styled.div`
  display: flex;
`;

const Time = styled.div`
  color: ${colors.darkGrey};
`;

const Toolbar = ({ likes, comments }) => {
  return (
    <Wrapper>
      <Actions>
        <IconCounter icon={Comments} count={comments} color={colors.darkGrey} />
        <IconCounter icon={LikeIcon} count={likes} color={colors.lightRed} />
      </Actions>
      {/* TODO: extract photo updated_at to human text */}
      <Time>12 min ago</Time>
    </Wrapper>
  );
};

export default Toolbar;
