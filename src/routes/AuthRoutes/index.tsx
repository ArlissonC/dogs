import CreateUser from "pages/Auth/CreateUser";
import Login from "pages/Auth/Login";
import LostPassword from "pages/Auth/LostPassword";
import Reset from "pages/Auth/Reset";
import Home from "pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "themes/LoginForm";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<LoginForm />}>
        <Route index element={<Login />} />
        <Route path="criar" element={<CreateUser />} />
        <Route path="perdeu-senha" element={<LostPassword />} />
        <Route path="resetar" element={<Reset />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AuthRoutes;
