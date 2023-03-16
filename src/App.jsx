import React from 'react';
import Homepage from "./Homepage.jsx"
import Projects from "./Projects.jsx"
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";

function App() {

  let contrast = localStorage.getItem("theme");
  const [mode, setMode] = React.useState(contrast);

  function toggleMode() {

    if (contrast === "" || contrast === null) {
      contrast = "dark";
      document.documentElement.classList.add('dark');
    } else {
      contrast = "";
      document.documentElement.classList.remove('dark')
    }
    setMode(contrast);
    localStorage.setItem("theme", contrast);
  }



  if (mode) {
    document.getElementById('main').style.backgroundColor = "black"
  } else {
    document.getElementById('main').style.backgroundColor = "#f4f4f5"
  }
  return (
    <div className={`text-zinc-800 dark:text-zinc-50 ${mode}`}>
      <div className={`bg-white dark:bg-zinc-900 md:w-11/12 lg:w-10/12 xl:w-primary m-auto dark:text-zinc-50 ${mode}`}>
        <div className={`flex flex-col bg-white dark:bg-zinc-900 p-4 md:px-12 lg:px-18 xl:px-24`}>
          <Routes>
            <Route path="/" element={<Homepage
              theme={mode}
              toggle={toggleMode}
            />}
            />
            <Route path="/projects" element={<Projects
              theme={mode}
              toggle={toggleMode}
            />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
