import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Philippe Fanaro&apos;s Portfolio</title>
        <meta name="description" content="Philippe Fanaro's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 px-10">
        <section className="min-h-screen">
          <nav className="flex justify-between py-8 mb-12">
            <h1>Philippe Fanaro</h1>
            <ul>
              <li>
                <a href="#">CV</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}
