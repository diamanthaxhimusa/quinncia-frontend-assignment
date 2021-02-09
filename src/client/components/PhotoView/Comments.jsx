import React, { useEffect, useState } from "react";
import styled from "styled-components";

import colors from "../../utils/theme/colors";
import LikeIcon from "../../../../assets/icons/trending.svg";
import AvatarIcon from "../../../../assets/avatar.png";
import IconCounter from "./IconCounter";
import Divider from "../common/Divider";
import api from "../../api";

const Wrapper = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 10px;
  flex-direction: column;
`;

const CommentWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  & span {
    margin: 10px;
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
`;

const Comments = () => {
  const [comments, setComments] = useState([1,2,3]);

  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentWrapper key={comment}>
          <Avatar src={AvatarIcon} alt="" />
          <span><strong>John doe</strong>: lorem ipsum dolor sit amet.</span>
        </CommentWrapper>
      ))}
    </Wrapper>
  );
};

export default Comments;
