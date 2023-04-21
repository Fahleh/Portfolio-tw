import React from "react";
import data from "./data.jsx";

function Projects(props) {
  const cardElements = data.map((item) => {
    return (
      <div
        key={item.id}
        className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl p-6 lg:w-1/3 cursor-pointer"
      >
        <a href={item.url}>
          <div className="justify-between">
            <img
              src={item.image}
              alt="logo.png"
              className={`h-10  border rounded-full border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800`}
            />
            <h2 className="mt-6 mb-6">{item.title}</h2>
            <p>{item.desc}</p>
            <p className="mt-6">{item.link}</p>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="cursor-pointer">
          <a href="/">
            <img
              src="./images/free-agent.png"
              className={`h-10  border border-zinc-100 dark:border-zinc-800 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-500`}
              alt="home-icon.png"
            />
          </a>
        </div>
        <div
          className={`border border-gray-100 dark:border-zinc-800 dark:bg-zinc-800 rounded-3xl py-2 px-6`}
        >
          <a href="/projects" className="text-lime-500 cursor-pointer">
            Projects
          </a>
        </div>
        <div
          className={`w-12 px-3 py-2 flex justify-center items-center ml-6 border border-zinc-100 dark:border-zinc-800 dark:hover:border-zinc-500 dark:bg-zinc-800 rounded-2xl cursor-pointer`}
          onClick={props.toggle}
        >
          <img
            src={!props.theme ? "/images/moon.png" : "/images/sun.png"}
            alt=""
            className=""
          />
        </div>
      </div>
      <div className="mt-12 md:mt-36 lg:w-2/3">
        <h1 className="text-5xl">Front-End Developer.</h1>
        <p className="mt-6">
          Since I started my journey as a developer I have worked on a couple of
          projects both individually and as part of a team. These are some of
          the more significant ones.
        </p>
      </div>
      <div className="md:flex mt-12">{cardElements}</div>
    </div>
  );
}
export default Projects;
