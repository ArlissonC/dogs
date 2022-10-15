import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Login from "pages/Auth/Login";
import CreateUser from "pages/Auth/CreateUser";
import LostPassword from "pages/Auth/LostPassword";
import Reset from "pages/Auth/Reset";
import LoginForm from "themes/LoginForm";
import Home from "pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Account from "pages/Account";
import Feed from "pages/Feed";
import PhotoPost from "pages/PhotoPost";
import Stats from "pages/Stats";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<LoginForm />}>
          <Route index element={<Login />} />
          <Route path="criar" element={<CreateUser />} />
          <Route path="perdeu-senha" element={<LostPassword />} />
          <Route path="resetar" element={<Reset />} />
        </Route>
        <Route path="conta" element={<ProtectedRoute element={<Account />} />}>
          <Route index element={<Feed />} />
          <Route path="postar" element={<PhotoPost />} />
          <Route path="estatisticas" element={<Stats />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
