import Head from "components/Helper/Head";
import Feed from "pages/Feed";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={user!} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
