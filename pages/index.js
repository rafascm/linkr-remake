import Layout from "../components/Layout";
import Title from "../components/Title";
import SignIn from "../components/SignIn";

const Home = () => {
  return (
    <Layout>
      <div className="has-background-black-ter">
        <div className="container">
          <div className="columns is-vcentered full-height">
            <Title />
            <SignIn />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
