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
