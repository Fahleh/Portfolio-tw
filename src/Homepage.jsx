import React from "react";

function Homepage(props) {
  return (
    <>
      <div className="mt-2 flex self-end md:w-2/4 md:justify-between md:float-right">
        <div
          className={`border border-zinc-200 dark:border-none dark:bg-zinc-800 rounded-3xl py-2 px-6`}
        >
          <a href="/projects" className="hover:text-lime-500 cursor-pointer">
            Projects
          </a>
        </div>
        <div
          className={`w-12 px-3 py-2 flex justify-center items-center ml-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 dark:bg-zinc-800 rounded-2xl cursor-pointer`}
          onClick={props.toggle}
        >
          <img
            src={!props.theme ? "/images/moon.png" : "/images/sun.png"}
            alt=""
            className="w-5"
          />
        </div>
      </div>
      <div className="mt-16 md:mt-28">
        <a href="/">
          <img
            src="./images/free-agent.png"
            className={`h-16 w-16 border border-zinc-100 dark:border-zinc-700 rounded-full bg-zinc-50 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500 cursor-pointer`}
            alt="homeicon.png"
          />
        </a>
      </div>
      <div className="mt-8 lg:w-2/3">
        <h1 className="text-5xl">Front-End Developer.</h1>
        <p className="mt-6">
          I’m Uduak, a front-end developer based in Lagos, Nigeria. I am
          currently working freelance, and on a part-time basis with the team at
          Wambi, a social networking startup looking to get into Nigeria from
          Cameroon.
        </p>
        <div className="flex mt-6">
          <a href="https://www.linkedin.com/in/ukpong-uduak">
            <img
              src="./images/linkedin-icon.png"
              className="w-5 mr-4"
              alt="Icon.png"
            />
          </a>
          <a href="https://www.github.com/Fahleh">
            <img
              src="./images/GitHub-icon.png"
              className="w-5"
              alt="Icon.png"
            />
          </a>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:justify-items-center lg:flex justify-center mt-16">
        <img
          src="./images/uduak-smiles.jpg"
          alt="personal.png"
          className="w-full rounded-2xl mb-10 md:w-72 md:mr-0 lg:w-48 xl:w-72 lg:mr-8 lg:rotate-3"
        />
        <img
          src="./images/scores.png"
          alt="personal.png"
          className="w-full rounded-2xl border mb-10 md:w-72 md:mr-0 lg:w-48 xl:w-72 lg:mr-8 lg:-rotate-3"
        />

        <img
          src="./images/Mobile-home.png"
          alt="personal.png"
          className="w-full rounded-2xl border mb-10 md:w-72 md:mr-0 lg:w-48 xl:h-96 lg:mr-8 lg:rotate-3"
        />
        <img
          src="./images/Wambi-home.png"
          alt="personal.png"
          className="w-full rounded-2xl mb-10 md:w-72 md:mr-0 lg:w-48 xl:w-72 lg:mr-8 lg:rotate-3"
        />
        <img
          src="./images/solo-leveling.jpg"
          alt="personal.png"
          className="w-full rounded-2xl md:w-72 md:mr-0 lg:w-48 xl:w-72 xl:h-96 lg:h-96 lg:mr-8 lg:-rotate-3"
        />
      </div>
      <div className="xl:flex justify-between mt-20">
        <div className="xl:w-6/12">
          <p>
            I am a highly motivated and enthusiastic individual with the
            willingness to learn and work in a challenging environment that
            offers significant exposure and development. I am always eager to
            contribute through hard work, attention to detail, excellent
            organizational skills, efficiently using my analytical & innovative
            skills skills for the growth of any organization I find myself.
          </p>
          <p className="mt-4">
            I am passionate about creating in general, I love coding & every
            step of the process involved in building websites, web & mobile
            applications. When I'm not coding, I love catching up with anime &
            basketball, working-out, and traveling.
          </p>
        </div>
        <div
          className={`mt-10 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 xl:w-5/12`}
        >
          <div className="flex">
            <img src="./images/work-case.png" alt="icon.png" className="w-6" />
            <p className="ml-2">Work</p>
          </div>
          <div className="w-full flex flex-col p-4 mt-4">
            <div className="flex">
              <img
                src="./images/free-agent.png"
                alt="company-logo.png"
                className={`w-14 md:w-12 border border-zinc-100 dark:border-zinc-800 rounded-full mr-4 bg-zinc-50 dark:bg-zinc-800`}
              />
              <ul className="w-full">
                <li className="resume-title card-title">Freelance</li>
                <li className="text-xs md:text-sm flex justify-between">
                  Front-End Developer<span>2022 — Present</span>
                </li>
              </ul>
            </div>
            <div className="flex mt-4">
              <img
                src="./images/wambi.png"
                alt="company-logo.png"
                className={`w-14 md:w-12 border border-zinc-100 dark:border-zinc-800 rounded-full bg-zinc-50 dark:bg-zinc-800 p-1 mr-4`}
              />
              <ul className="w-full">
                <li className="resume-title card-title">Wambi</li>
                <li className="text-xs md:text-sm flex justify-between">
                  Front-End Developer<span>2022 — Present</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
