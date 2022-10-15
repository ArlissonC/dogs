import api from "./api";

export const PHOTO_POST = (formData: any) => {
  return api.post("/api/photo", formData);
};
