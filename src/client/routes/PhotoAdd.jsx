import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import Header from "../components/common/Header";
import StepCard from "../components/PhotoAdd/StepCard";
import colors from "../utils/theme/colors";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";

import api from "../api";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 16px;
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
`;

const DropzoneStyled = styled.div`
  width: 100%;
  border: 3px dashed ${colors.purple};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  font-size: 12px;
  height: 100px;
`;

const PhotoAdd = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    multiple: false,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });
  
  const upload = () => {
    const body = new FormData();
    body.append('profile', file);
    body.append('description', description);
    body.append('name', title);
    api.photoApi.addPhoto(body).then(() => {
      history.push("/");
    });
  }

  return (
    <Wrapper>
      <Header noSearch />
      <p></p>
      <Section>
        <StepCard
          step={1}
          title="Select your picture"
          description="The minimum picture resolution is 1024x768. We accept PNG & JPG file extensions (up to 4mb)"
        />
        <DropzoneStyled
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </DropzoneStyled>
      </Section>
      <Section>
        <StepCard
          step={2}
          title="Describe your picture"
          description="Please add a few words to your picture"
        />
        <Container>
          <Input placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          <TextArea placeholder="Description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Container>
      </Section>
      <Section>
        <StepCard
          step={3}
          title="Add some keywords"
          description="Adding keywords to your picture helps people discover your picture"
        />
        <Wrapper>
          <Input placeholder="Enter the keyword..." type="text" />
        </Wrapper>
      </Section>
      <div>
        <Button onClick={() => upload()} title="Post" />
      </div>
    </Wrapper>
  );
};

export default PhotoAdd;
