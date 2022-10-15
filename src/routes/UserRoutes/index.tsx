import Account from "pages/Account";
import Feed from "pages/Feed";
import Home from "pages/Home";
import PhotoPost from "pages/PhotoPost";
import Stats from "pages/Stats";
import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="conta" element={<Account />}>
        <Route index element={<Feed />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default UserRoutes;
