import { nanoid } from "nanoid";

const cards = [
  {
    id: nanoid(),
    image: "/images/free-agent.png",
    title: "Quizzical Trivia",
    desc: `A web game application that consists of guessing the answers
           to a variety of fun questions.`,
    url: "https://quiz-treevia.netlify.app/",
    link: "quiz-treevia.netlify.app/",
  },
  {
    id: nanoid(),
    image: "/images/wambi.png",
    title: "Wambi",
    desc: "A social media platform that provides a seamless mix of social & commercial networking",
    url: "https://github.com/Fahleh/Wambi-beta",
    link: "github.com/Fahleh/Wambi-beta",
  },
  {
    id: nanoid(),
    image: "/images/logo1.png",
    title: "StayFitWithOye",
    desc: "A fitness application for Mobile phones",
    url: "https://github.com/Fahleh/StayFitWithOye",
    link: "github.com/Fahleh/StayFitWithOye",
  },
];

export default cards;
