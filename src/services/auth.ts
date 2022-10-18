import api from "./api";

export const TOKEN_POST = (payload: any) => {
  return api.post("/jwt-auth/v1/token", payload);
};

export const USER_GET = () => {
  return api.get("/api/user");
};

export const TOKEN_VALIDATE_POST = (body: any) => {
  return api.post("/jwt-auth/v1/token/validate", body);
};

export const USER_POST = (body: any) => {
  return api.post("/api/user", body);
};

export const PASSWORD_LOST = (body: any) => {
  return api.post("/api/password/lost", body);
};

export const PASSWORD_RESET = (body: any) => {
  return api.post("/api/password/reset", body);
};
