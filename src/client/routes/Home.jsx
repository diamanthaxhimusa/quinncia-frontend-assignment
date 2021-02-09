import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";

import Card from "../components/common/Card";
import Header from "../components/common/Header";
import UploadPhotoCard from "../components/Home/UploadPhotoCard";

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 26px;
  row-gap: 26px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
`;

const Home = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    api.photoApi
      .getPhotos()
      .then(({ data }) => setPhotos(data.photos))
      .catch((err) => alert(err.response.data.error))
  }, []);

  return (
    <Wrapper>
      <Grid>
        <Header />
        <UploadPhotoCard />
        {photos.map((photo) => (
          <Card
            key={photo._id}
            image={photo._id}
            to={`/photo/${photo._id}`}
            title={photo.name}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Home;
