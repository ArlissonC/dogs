import CreateUser from "pages/Auth/CreateUser";
import Login from "pages/Auth/Login";
import LostPassword from "pages/Auth/LostPassword";
import Reset from "pages/Auth/Reset";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "themes/LoginForm";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}>
        <Route index element={<Login />} />
        <Route path="criar" element={<CreateUser />} />
        <Route path="perdeu-senha" element={<LostPassword />} />
        <Route path="resetar" element={<Reset />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
