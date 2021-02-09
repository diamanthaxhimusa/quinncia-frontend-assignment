import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import api from "../api";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import colors from "../utils/theme/colors";
import Toolbar from "../components/PhotoView/Toolbar";
import Divider from "../components/common/Divider";
import Comments from "../components/PhotoView/Comments";
import CommentForm from "../components/PhotoView/CommentForm";

const Wrapper = styled.div``;

const Container = styled.div`
  margin-top: 40px;
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const Suggestions = styled.div`
  flex: 1;
  margin-left: 50px;
  text-align: center;
  @media(max-width: 958px) {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.black};
  margin-top: 26px;
  margin-bottom: 10px;
`;

const Description = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: ${colors.black};
`;

const PhotoView = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    api.photoApi
      .getPhoto(id)
      .then(({ data }) => setPhoto(data.photo))
      .catch((err) => alert(err.response.data.error));
  }, []);

  if (!photo) return <div>loading...</div>;
  return (
    <Wrapper>
      <Header noSearch />
      <Container>
        <Main>
          <Card
            to={`${photo._id}`}
            size="big"
            key={photo._id}
            image={photo._id}
            title={photo.name}
          />
          <Title>{photo.name}</Title>
          <Description>{photo.description}</Description>
          <Toolbar likes={photo.likes} comments={photo.commentIDs.length} />
          <Divider />
          <Comments />
          <Divider />
          <CommentForm />
        </Main>
        <Suggestions>
          <span>Other pictures you might be interested in</span>
        </Suggestions>
      </Container>
    </Wrapper>
  );
};

export default PhotoView;
