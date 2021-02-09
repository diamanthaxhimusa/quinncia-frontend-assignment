import React from "react";
import styled from "styled-components";
import colors from "../../utils/theme/colors";

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid ${colors.lightGrey};
  outline: none;
  padding: 10px;
  width: 100%;
  resize: none;
  &:active,:focus {
    box-shadow: 0px 0px 10px -7px #000000a6;
  }
  &::placeholder {
    color: ${colors.darkGrey};
  }
`;

export default TextArea;
