import { nanoid } from "nanoid"

const cards = [
  {
    id: nanoid(),
    image: "/images/free-agent.png",
    title: "Quizzical Trivia",
    desc: `A web game application that consists of guessing the answers
           to a variety of fun questions.`,
    url: "https://www.github.com/Fahleh/Quizzical",
    link: "github.com/Fahleh/Quizzical"
  },
  {
    id: nanoid(),
    image: "/images/wambi.png",
    title: "Wambi",
    desc: "A social media platform that provides a seamless mix of social & commercial networking",
    url: "https://wambi.dev",
    link: "wambi.dev"
  },
]

export default cards;
