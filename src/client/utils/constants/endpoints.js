export default {
  addPhoto: '/photo/',
  getPhotos: '/photo/many',
  getPhoto: (id) => `/photo/${id}`,
  deletePhoto: (id) => `/photo/${id}`,
  getPhotoContent: (id) => `/photo/content/${id}`,
  updatePhoto: (id) => `/photo/${id}`,
  attachTagsToPhoto: (id) => `/photo/${id}/tags/attach`,
  getTags: '/tag/many',
  getTag: '/tag/by-name',
  addTag: '/tag/',
  getComments: '/comment/many',
  getComment: (id) => `/comment/${id}`,
  addComment: '/comment/',
  deleteComment: (id) => `/comment/${id}`,
  updateComment: (id) => `/comment/${id}`
};
