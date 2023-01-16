import Head from "next/head";

import Image from "next/image";
import pfPic from "../../public/PhilippeFanaro.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Philippe Fanaro&apos;s Portfolio</title>
        <meta name="description" content="Philippe Fanaro's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 px-10 min-h-screen">
        <section className="align-middle">
          <div className="text-center p-6" id="dev-card">
            <Image
              src={pfPic}
              alt="Profile Picture"
              height={170}
              width={170}
              className="mx-auto"
            />
            <h1 className="text-6xl py-5 text-blue-700 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-800">
              Philippe Fanaro
            </h1>
            <h3 className="text-2xl py-5">Fullstack Developer</h3>
            <div className="grid grid-cols-[90px_90px] sm:grid-cols-[repeat(4,90px)] justify-center gap-6 py-5">
              <div className="grid grid-rows-[90px_20px] justify-center">
                <Image
                  src="/flutter-icon.svg"
                  alt="Flutter"
                  width={80}
                  height={80}
                />
                <p className="text-md py-2 text-gray-800">Flutter</p>
              </div>
              <div className="grid grid-rows-[90px_20px] justify-center">
                <Image
                  src="/react-icon.svg"
                  alt="React"
                  width={80}
                  height={80}
                />
                <p className="text-md py-2 text-gray-800">React</p>
              </div>
              <div className="grid grid-rows-[90px_20px] justify-center">
                <Image
                  src="/typescript-icon.svg"
                  alt="TypeScript"
                  width={80}
                  height={80}
                />
                <p className="text-md py-2 text-gray-800">TypeScript</p>
              </div>
              <div className="grid grid-rows-[90px_20px] justify-center">
                <Image
                  src="/firebase-icon.svg"
                  alt="firebase"
                  width={80}
                  height={80}
                />
                <p className="text-md py-2 text-gray-800">Firebase</p>
              </div>
            </div>
          </div>

          <div className="text-4xl flex justify-center gap-10 text-gray-800">
            <a
              href="https://github.com/psygo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/philippe-fanaro/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
