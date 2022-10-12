import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Login from "pages/Auth/Login";
import CreateUser from "pages/Auth/CreateUser";
import LostPassword from "pages/Auth/LostPassword";
import Reset from "pages/Auth/Reset";
import LoginForm from "themes/LoginForm";
import Home from "pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<LoginForm />}>
          <Route path="login" element={<Login />} />
          <Route path="criar" element={<CreateUser />} />
          <Route path="perdeu-senha" element={<LostPassword />} />
          <Route path="resetar" element={<Reset />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
