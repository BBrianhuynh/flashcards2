import './App.css';
import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
const App = () => {
  var [count, setCount] = useState(0);
  var [userAnswer, setUserAnswer] = useState("");
  var [isOn, setIsOn] = useState(false);
  var [correct, setCorrect] = useState(false);
  const [flip, setFlip] = useState(false);
  if(count == 10){
    count = 0;
  }
  if (count == -1)
  {
    count = 9;
  }
  const answerSubmit = (event) => {
    // Get input value from "event"
    setUserAnswer(userAnswer = event.target.value);
  };
  const correctOrFalse = () =>
  {
    if (userAnswer == CARDS[count].word)
    {
      setIsOn(isOn = true);
      setCorrect(correct = true);

    }else{
      setIsOn(isOn = true);
      setCorrect(correct = false);
    }
  }
  return (
    <div className="App">
      <div>
      <h1>
        Number to Words!
      </h1>
      </div>
      <div>
        <h2>
          A flashcard set to help you learn how numbers are spelled using words.
        </h2>
      </div>
      <div>
        Card {count+1} / 10
      </div>
        <button class = "button" onClick={() => setCount(count-1)}>&lt;-</button>
        <button class = "button" onClick={() => setCount(count+1)}>-&gt;</button>
        <button class = "button" onClick={() => setCount(Math.floor(Math.random()*10+1))}>Shuffle</button>
      <div>
      <ReactCardFlip isFlipped={flip}
            flipDirection="horizontal">
            <div onClick={() => {setFlip(!flip), setIsOn(isOn = false)}}
            class='front'>
                {CARDS[count].id}
            </div>
            <div onClick={() => setFlip(!flip)}
            class='back'>
                {CARDS[count].word}
            </div>
      </ReactCardFlip>
      </div>
      <div>
        <p>Guess the answer here:</p>
        <input type="text" onChange={answerSubmit} placeholder="Enter your answer here..."></input>
        <button className = "Answer" onClick={correctOrFalse}>Submit Guess</button>
        {isOn && <p>{correct ? "Correct" : "Incorrect"}</p>}
      </div>
    </div>
  )
}

const CARDS = [
  {
    id: "1",
    number: "1",
    word: "One",
  },
  {
    id: "2",
    number: "2",
    word: "Two"
  },
  {
    id: "3",
    number: "3",
    word:"Three"
  },
  {
    id: "4",
    number:"4",
    word:"Four"
  },
  {
    id: "5",
    number: "5",
    word:"Five"
  },
  {
    id: "6",
    number: "6",
    word:"Six"
  },
  {
    id: "7",
    number: "7",
    word:"Seven"
  },
  {
    id: "8",
    number: "8",
    word:"Eight"
  },
  {
    id: "9",
    number: "9",
    word:"Nine"
  },
  {
    id: "10",
    number: "10",
    word:"Ten"
  }
];
export default App