import { useState, useEffect } from 'react';

export default function Typewriter() {
  let list = [
    'Las nubes de tormenta se reunieron rápidamente sobre el tranquilo pueblo. En menos de una hora, la fuerte lluvia comenzó a inundar las estrechas calles.',
    'El cachorro cruzó el patio con una energía inagotable. Momentos después, se desplomó en la hierba, jadeando felizmente.',
    'El científico ajustó el telescopio para enfocarse en Júpiter. A través de la lente, se hicieron visibles las tormentas arremolinadas del planeta.',
    'El gato se acurrucó en el soleado alféizar, ronroneando suavemente. La luz cálida entraba por el cristal, haciendo de ese rinconcito su lugar favorito para dormir la siesta.',
    'La vieja bicicleta crujía mientras él pedaleaba por la estrecha calle adoquinada. Los niños le saludaban desde los portales, sus risas resonando por el vecindario.',
    'Una taza de té humeante permanecía intacta sobre el escritorio de madera. Ella miraba la lluvia golpear contra la ventana, perdida en sus pensamientos.',
    'La linterna parpadeaba débilmente en el aire frío de la noche. Él se ajustó el abrigo con firmeza, decidido a seguir avanzando por el sendero desierto.',
    'Brillantes globos flotaban sobre la mesa de cumpleaños. Los ojos de los niños se iluminaron cuando el pastel fue llevado a la sala.',
    'Las olas golpeaban rítmicamente contra la rocosa orilla. Una gaviota solitaria daba vueltas en lo alto, llamando a su bandada.',
    'El pan recién horneado llenaba la cocina con un aroma cálido y acogedor. Su abuela sonrió mientras rebanaba una hogaza, repartiendo trozos a la familia.'
  ]; //make this have 10 total strings of two sentences and make them Spanish sentences.

  let [randNum, reset] = useState(Math.floor(Math.random() * list.length));
  let [text, setText] = useState('');
  let [incorrectIndex, setIncorrectIndex] = useState(list[randNum].length);

  let str = text === list[randNum] ? "You finished!!" : "INCORRECT...";

  useEffect(() => {
    let index = list[randNum].length;
    for (let i = 0; i < text.length; i++) {
      if (list[randNum].charAt(i) !== text.charAt(i)) {
        index = i;
        break;
      }
    }

    setIncorrectIndex(index);
  }, [text]);

  function resetSentence() {
    reset(Math.floor(Math.random() * list.length));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 20 }}>Type the sentence below:</h1>
      <div>{list[randNum]}</div>
      <div className="flex">
        {text.split('').map((letter, index) => (
          <div
            className={`${
              index < incorrectIndex ? 'text-success' : 'text-error'
            } whitespace-pre`}
          >
            {letter}
          </div>
        ))}
      </div>
      <br />
      <textarea
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        placeholder="Primary"
        class="textarea textarea-primary"
      ></textarea>
      <br />
      <br />
      <button
        onClick={resetSentence}
        className="btn btn-warning btn-l"
      >
        RESET
      </button>
      <button className="border border-2 w-40 h-12 text-xl m-2 rounded-lg text-black" style={{backgroundColor: str !== "" ? "#FFB09C" : str === list[randNum] ? "#90EE90" : "FFB09C"}}>{str}</button>
    </div>
  );
}
