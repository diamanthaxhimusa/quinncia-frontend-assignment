import Home from "../../routes/Home";
import PhotoView from "../../routes/PhotoView";
import PhotoAdd from "../../routes/PhotoAdd";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/photo/:id",
    exact: true,
    component: PhotoView,
  },
  {
    path: "/add",
    exact: true,
    component: PhotoAdd,
  },
];
