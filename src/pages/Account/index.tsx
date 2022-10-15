import { Outlet } from "react-router-dom";
import AccountHeader from "./AccountHeader";

const Account = () => {
  return (
    <section className="container">
      <AccountHeader />
      <Outlet />
    </section>
  );
};

export default Account;
