import { useState, useEffect } from "react";

export default function ImageGuessing() {
  let sentenceFrames = [
    ["¿Puedes", "ayudarme", "a", "encontrar", "el", "camino", "correcto", "?"],
    [
      "Me",
      "gustaría",
      "reservar",
      "una",
      "mesa",
      "para",
      "cuatro",
      "personas",
      ".",
    ],
    ["¿A", "qué", "hora", "sale", "el", "próximo", "tren", "mañana", "?"],
    ["Lo", "siento,", "no", "entiendo", "bien", "lo", "que", "dijiste", "."],
    [
      "¿Podrías",
      "repetirlo",
      "un",
      "poco",
      "más",
      "despacio,",
      "por",
      "favor",
      "?",
    ],
    ["Quiero", "comprar", "un", "boleto", "de", "ida", "y", "vuelta", "."],
    [
      "Hace",
      "mucho",
      "calor",
      "hoy,",
      "prefiero",
      "quedarme",
      "en",
      "casa",
      ".",
    ],
    [
      "¿Dónde",
      "está",
      "la",
      "estación",
      "principal",
      "de",
      "autobuses",
      "aquí",
      "?",
    ],
    [
      "Necesito",
      "llamar",
      "a",
      "un",
      "taxi",
      "para",
      "ir",
      "al",
      "aeropuerto",
      ".",
    ],
    [
      "El",
      "supermercado",
      "más",
      "cercano",
      "está",
      "a",
      "cinco",
      "minutos",
      "caminando",
      ".",
    ],
  ];

  //all initializations
  let [list, changeList] = useState([
    ...sentenceFrames[Math.floor(Math.random() * sentenceFrames.length)],
  ]);
  let [chosenList, setChosenList] = useState([...list]);
  let [used, resetUsed] = useState(new Array(list.length).fill(0));
  let buttons = list.map((v, i) => (
    <button
      key={i}
      className="btn btn-warning btn-l"
      onClick={function () {
        addWord(i);
      }}
      disabled={used[i] === 1}
    >
      {v}
    </button>
  ));
  let [answer, resetAnswer] = useState([]);
  let [answerInd, resetAnswerInd] = useState([]);
  let [correctAnswer, resetCorrectAnswer] = useState(
    new Array(chosenList.length).fill(0)
  );
  let buttonsAnswer = answer.map((v, i) => (
    <button
      key={i}
      className="btn btn-warning btn-l"
      onClick={function () {
        bringBack(i);
      }}
      style={{
        backgroundColor:
          correctAnswer[i] === 2
            ? "#6F0"
            : correctAnswer[i] === 1
            ? "#F00"
            : "fcd344",
      }}
    >
      {v}
    </button>
  ));

  //useEffect is used so that the shuffle method will run before the game begins
  useEffect(() => {
    shuffle();
  }, []);

  //all functions
  function shuffle() {
    // complete
    let temp = [
      ...sentenceFrames[Math.floor(Math.random() * sentenceFrames.length)],
    ];
    setChosenList([...temp]);
    resetUsed(new Array(temp.length).fill(0));
    resetAnswer([]);
    resetAnswerInd([]);
    resetCorrectAnswer(new Array(temp.length).fill(0));

    for (let i = 0; i < 1000; i++) {
      let randInd = Math.floor(Math.random() * temp.length);

      let tempVal = temp[0];
      temp[0] = temp[randInd];
      temp[randInd] = tempVal;
    }

    changeList(temp);
  }

  function addWord(ind) {
    // complete

    let temp = [...answer];
    temp.push(list[ind]);
    resetAnswer(temp);

    let temp2 = [...answerInd];
    temp2.push(ind);
    resetAnswerInd(temp2);

    resetUsed(used.map((v, i) => (i === ind ? 1 : v)));
  }

  function bringBack(ind) {
    // complete

    let temp = [...answer];
    temp.splice(ind, 1);

    let temp2 = [...answerInd];
    temp2.splice(ind, 1);

    resetUsed(used.map((v, i) => (i === answerInd[ind] ? 0 : v)));
    resetAnswer(temp);
    resetAnswerInd(temp2);
  }

  function reset() {
    // complete

    shuffle();
  }

  function tryAgain() {
    resetUsed(new Array(list.length).fill(0));
    resetAnswer([]);
    resetAnswerInd([]);
    resetCorrectAnswer(new Array(list.length).fill(0));
  }

  function checkAnswer() {
    let temp = [...correctAnswer];

    if (answer.length === chosenList.length) {
      for (let i = 0; i < chosenList.length; i++) {
        if (chosenList[i] === answer[i]) {
          temp[i] = 2;
        } else if (chosenList[i] !== answer[i]) {
          temp[i] = 1;
        }
      }
    }

    console.log(temp);

    resetCorrectAnswer(temp);
  }

  return (
    <div>
      <div>
        After you click the "Check Answer" button, Please press the "Try Again"
        Button!
      </div>
      <br />
      <div>{buttons}</div>
      <br />
      <div className="border border-dashed"></div>
      <br />
      <div>{buttonsAnswer}</div>
      <br />
      <div className="text-center">
        <button className="btn btn-warning btn-l" onClick={reset}>
          RESET
        </button>
      </div>
      <div className="text-center">
        <button className="btn btn-warning btn-l" onClick={checkAnswer}>
          CHECK ANSWER
        </button>
      </div>
      <div className="text-center">
        <button className="btn btn-warning btn-l" onClick={tryAgain}>
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
