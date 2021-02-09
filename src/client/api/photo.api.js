import { instance as api } from ".";
import endpoints from "../utils/constants/endpoints";

export const getPhotos = (data) =>
  api({
    method: "GET",
    url: endpoints.getPhotos,
    data,
  });

export const addPhoto = (data) =>
  api({
    method: "POST",
    url: endpoints.addPhoto,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getPhoto = (id) =>
  api({
    method: "GET",
    url: endpoints.getPhoto(id)
  });