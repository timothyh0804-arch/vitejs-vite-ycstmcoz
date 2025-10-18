import { useState, useEffect } from "react";

export default function Match() {
  let [cardInfo, resetCardInfo] = useState([
    { word: "Hola", num: 1 },
    { word: "Hello", num: 1 },
    { word: "Adiós", num: 2 },
    { word: "Goodbye", num: 2 },
    { word: "Por favor", num: 3 },
    { word: "Please", num: 3 },
    { word: "Gracias", num: 4 },
    { word: "Thank you", num: 4 },
    { word: "Sí", num: 5 },
    { word: "Yes", num: 5 },
    { word: "No", num: 6 },
    { word: "No", num: 6 },
    { word: "Baño", num: 7 },
    { word: "Bathroom", num: 7 },
    { word: "Agua", num: 8 },
    { word: "Water", num: 8 },
    { word: "Comida", num: 9 },
    { word: "Food", num: 9 },
    { word: "Ayuda", num: 10 },
    { word: "Help", num: 10 },
    { word: "Cuánto cuesta", num: 11 },
    { word: "How much does it cost?", num: 11 },
    { word: "Aeropuerto", num: 12 },
    { word: "Airport", num: 12 },
    { word: "Dinero", num: 13 },
    { word: "Money", num: 13 },
    { word: "Hotel", num: 14 },
    { word: "Hotel", num: 14 },
    { word: "Calle", num: 15 },
    { word: "Street", num: 15 },
    { word: "Entrada", num: 16 },
    { word: "Ticket/Entrance", num: 16 },
  ]);
  let [clicked, resetClick] = useState(new Array(32).fill(0));
  let [correct, resetCorrect] = useState(0);

  useEffect(() => {
    reset();
  }, []);

  let buttons = cardInfo.map((v, i) => (
    <button
      key={i}
      className="border border-2 w-40 h-40 text-xl m-2 rounded-lg"
      style={{
        backgroundColor:
          clicked[i] >= 2 ? "#0F0" : clicked[i] === 1 ? "#E1AD01" : "#000",
        color:
          clicked[i] >= 2 ? "#964B00" : clicked[i] === 1 ? "#000" : "#E1AD01",
      }}
      disabled={clicked[i] >= 2}
      onClick={function () {
        click(i);
      }}
    >
      {v.word}
    </button>
  ));

  function reset() {
    let temp = [...cardInfo];
    for (let i = 0; i < 1000; i++) {
      let ind = parseInt(Math.random() * cardInfo.length);
      let tempVal = temp[0];
      temp[0] = temp[ind];
      temp[ind] = tempVal;
    }
    resetCardInfo(temp);

    resetClick(new Array(32).fill(0));
    resetCorrect(0);
  }

  function click(ind) {
    if (clicked[ind] === 0) {
      let temp = clicked.map((v, i) => (i === ind ? 1 : v));
      let tempCorrect = correct;
      for (let i = 0; i < temp.length; i++) {
        for (let j = i + 1; j < temp.length; j++) {
          if (
            temp[i] === 1 &&
            temp[j] === 1 &&
            cardInfo[i].num === cardInfo[j].num
          ) {
            temp = temp.map((v, index) =>
              index === i ? 2 : index === j ? 2 : v
            );
            tempCorrect++;
          }
        }
      }
      resetClick(temp);
      resetCorrect(tempCorrect);
    } else {
      resetClick(clicked.map((v, i) => (i === ind ? 0 : v)));
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="text-center">
        <div>Score: {correct}</div>
        <button className="btn btn-warning btn-xl" onClick={reset}>
          RESET
        </button>
      </div>
      <div className="overflow-y-auto flex-1 flex flex-wrap justify-evenly items-center">
        {buttons}
      </div>
    </div>
  );
}
