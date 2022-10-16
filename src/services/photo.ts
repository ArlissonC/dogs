import api from "./api";

export const PHOTO_POST = (formData: any) => {
  return api.post("/api/photo", formData);
};

export const PHOTOS_GET = ({ page, total, user }: any) => {
  return api.get(`/api/photo/?_page=${page}&_total=${total}&_user=${user}`);
};

export const PHOTO_GET = (id: number) => {
  return api.get(`/api/photo/${id}`);
};

export const COMMENT_POST = (id: number, body: any) => {
  return api.post(`/api/comment/${id}`, body);
};

export const PHOTO_DELETE = (id: number) => {
  return api.delete(`/api/photo/${id}`);
};
