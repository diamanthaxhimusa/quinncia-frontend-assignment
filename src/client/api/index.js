import axios from "axios";
import * as photoApi from "./photo.api";
import * as tagApi from "./tag.api";
import * as commentApi from "./comment.api";

export const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

instance.interceptors.response.use((response) => response, (error) => {
  alert(error.response.error)
});

export default {
  photoApi,
  tagApi,
  commentApi,
};
