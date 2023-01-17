import Image from "next/image";
import pfPic from "../../public/PhilippeFanaro.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import MainSkills from "@/components/MainSkills";

export default function TopSection() {
  return (
    <section className="flex flex-col align-middle">

      <div className="text-center p-6">
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
        <div className="grid grid-cols-[90px_90px] sm:grid-cols-[repeat(4,90px)] justify-center gap-6 py-5">
          <MainSkills iconName="flutter" legend="Flutter" />
          <MainSkills iconName="react" legend="React" />
          <MainSkills iconName="typescript" legend="TypeScript" />
          <MainSkills iconName="firebase" legend="Firebase" />
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
  );
}
