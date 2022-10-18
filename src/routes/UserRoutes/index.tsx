import Photo from "components/Photo";
import { useAuth } from "context/AuthContext";
import Account from "pages/Account";
import Feed from "pages/Feed";
import Home from "pages/Home";
import PhotoPost from "pages/PhotoPost";
import Stats from "pages/Stats";
import UserProfile from "pages/UserProfile";
import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
  const { data } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="conta" element={<Account />}>
        <Route index element={<Feed user={data.id} />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Route>
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<UserProfile />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default UserRoutes;
