import "./styles.css";
import randomWords from "random-words";
import { useState, useEffect } from "react";

export default function App() {
  const [words, setWords] = useState(randomWords(50));
  const [acc, setAcc] = useState(new Array(50).fill(0));
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState("");
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [keyCount, setKeyCount] = useState(0);

  const practiceDuration = 300; // 5 minutes in seconds

  useEffect(() => {
    let timerId;

    if (start) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setStart(false);
      clearInterval(timerId);
      handleTestEnd();
    }

    return () => clearInterval(timerId);
  }, [start, time]);

  useEffect(() => {
    if (start && text.length > 0) {
      setKeyCount((prevCount) => prevCount + 1);
    }
  }, [text, start]);

  function handleTestEnd() {
    const timeInMinutes = (practiceDuration - time) / 60;
    const wpm = Math.floor(correct / timeInMinutes);
    setResult(wpm + " WPM");
    if (wpm > highScore) {
      setHighScore(wpm);
    }
  }

  function checkText(event) {
    if (index >= words.length) {
      return;
    }

    if (start === false && event.target.value.length === 1) {
      setStart(true);
    }

    if (event.target.value[event.target.value.length - 1] === " ") {
      const typedWord = event.target.value.trim();
      const currentWord = words[index];

      setTotal(total + 1);
      let temp = [...acc];
      if (typedWord === currentWord) {
        setCorrect(correct + 1);
        temp[index] = 1;
      } else {
        temp[index] = -1;
      }
      setAcc(temp);

      if (index === words.length - 1) {
        generateNewWords();
      }
      setText("");
      setIndex(index + 1);
    } else {
      setText(event.target.value);
    }
  }

  function generateNewWords() {
    const newWords = randomWords(8); // change the words in one time
    setWords([...words, ...newWords]); // adding new word until the timer end
  }

  function reset() {
    const newWords = randomWords(8); // change the words in one time
    setWords(newWords);
    setText("");
    setIndex(0);
    setCorrect(0);
    setResult("");
    setStart(false);
    setTotal(0);
    setTime(practiceDuration);
    setAcc(new Array(50).fill(0));
    setKeyCount(0);
  }

  function chooseColor(i) {
    if (i === index) {
      return "yellow";
    }
    if (acc[i] === -1) {
      return "red";
    }
    if (acc[i] === 1) {
      return "green";
    }
    return "white";
  }

  const accuracyPercentage = (correct / words.length) * 100 || 0; // count only correct words accuracy

  return (
    <div className="App">
      <div className="box">
        <h1>Typing Test</h1>
        <div className="textMain">
          <h2 className="text">High Score: {highScore} WPM</h2>
          <h2 className="text">Correct: {correct} </h2>
          <h2 className="text">Accuracy: {accuracyPercentage.toFixed(2)}%</h2>
          <h2 className="text">
            Time Remaining:{" "}
            {Math.floor(time / 60)
              .toString()
              .padStart(2, "0")}
            :{(time % 60).toString().padStart(2, "0")}
          </h2>
        </div>

        {result && <h2 className="result">{result}</h2>}
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="text-box">
        {words.map((v, i) => (
          <div className="word" style={{ color: chooseColor(i) }}>
            {v}
          </div>
        ))}
      </div>
      <input
        disabled={time <= 0}
        value={text}
        onChange={(ev) => checkText(ev)}
        className="input"
        placeholder="Start your practice"
      />
      <h3 className="key-count">Key Count: {keyCount}</h3>
    </div>
  );
}
