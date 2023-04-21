import React from "react";

function Footer() {
  return (
    <div className="text-center md:flex justify-between mt-6 md:mt-16 p-10 border-t border-zinc-200 dark:border-zinc-700 ">
      <p className="mb-2">
        <a href="/projects" className=" hover:text-lime-500 cursor-pointe ">
          Projects
        </a>
      </p>
      <p className="copyright">
        <small>&#169; 2023 Uduak Ukpong. All rights reserved.</small>
      </p>
    </div>
  );
}

export default Footer;
