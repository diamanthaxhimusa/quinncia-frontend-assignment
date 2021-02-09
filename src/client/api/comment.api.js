import { instance as api } from ".";
import endpoints from "../utils/constants/endpoints";

export const getComments = (data) =>
  api({
    method: "GET",
    url: endpoints.getComments,
    data,
  });

export const addComment = (data) =>
  api({
    method: "POST",
    url: endpoints.addComment,
    data,
  });

export const getComment = (id) =>
  api({
    method: "GET",
    url: endpoints.getComment(id),
  });
