import React, { useState, useEffect } from "react";
import { initRecognition } from './utils/VoiceRecognition';

const App = () => {

  const [aaa, setAaa] = useState('Heoadadasdsadooo');

  const pronounce = sayArray => {
    if (sayArray) {
      sayArray.forEach(element => {
        TTS
          .speak({
            text: element,
            locale: 'pl-PL',
            rate: 0.75
          });
      });
    }
  }

  useEffect(() => {
    document.addEventListener('deviceready', () => {
      initRecognition().then(res => {
        pronounce(res);
      })

    }, false);
  }, [])

  return <div id="app">{aaa}</div>
};

export default App;
