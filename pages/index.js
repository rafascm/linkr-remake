import Head from "next/head";
import Header from "../components/Header";


const Home = () => {
  return (
    <>
      <Head>
        <title>Linkr</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Passion+One:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
