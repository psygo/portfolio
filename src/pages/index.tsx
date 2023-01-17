import Navbar from "@/components/Navbar";
import Head from "next/head";

import TopSection from "./TopSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Philippe Fanaro&apos;s Portfolio</title>
        <meta name="description" content="Philippe Fanaro's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex flex-col h-screen">
        <div id="container">
          <TopSection />
          <section>
            <h1 id="page-two">Page Two</h1>
          </section>
          <section>
            <h1>Page Three</h1>
          </section>
        </div>
      </main>
    </>
  );
}
