import Head from "next/head";
import Nav from "../components/navigation/Nav";
import MainPage from "../components/mainPage/MainComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Freedomland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-row">
        <Nav />
        <div className="flex  flex-grow">
          <MainPage />
        </div>
      </div>
    </>
  );
}
