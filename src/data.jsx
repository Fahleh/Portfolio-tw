import { nanoid } from "nanoid";

const cards = [
  {
    id: nanoid(),
    image: "/images/free-agent.png",
    title: "Quizzical Trivia",
    desc: `A web application that tests users knowledge in a variety of subjects through trivia questions.`,
    url: "https://quiz-treevia.netlify.app/",
    link: "quiz-treevia.netlify.app/",
  },
  {
    id: nanoid(),
    image: "/images/wambi.png",
    title: "Wambi",
    desc: "A social media platform that provides a seamless mix of social & commercial networking",
    url: "https://github.com/Fahleh/Wambi-beta.git",
    link: "github.com/Fahleh/Wambi-beta",
  },
  {
    id: nanoid(),
    image: "/images/logo1.png",
    title: "Fitness-App",
    desc: "A fitness application for Mobile phones",
    url: "https://github.com/Fahleh/Fitness-App.git",
    link: "github.com/Fahleh/Fitness-App",
  },
];

export default cards;
