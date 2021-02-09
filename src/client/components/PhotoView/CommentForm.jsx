import React, { useState } from "react";
import styled from "styled-components";
import api from "../../api";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";

const Wrapper = styled.div`
  padding: 26px 0;
`;

const CommentForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const send = () => {
    const body = new FormData();
    body.append('profile', file);
    body.append('comment', comment);
    body.append('name', name);
    api.commentApi.addComment(body);
  }
  
  return (
    <Wrapper>
      <Input
        placeholder="Your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p />
      <TextArea
        placeholder="Your message"
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <p />
      <Button onClick={() => send()} title="Send message" />
    </Wrapper>
  );
};

export default CommentForm;
