import React, { useState } from 'react'
import './App.css'
import me from './assets/me.jpg'



function getActiveClassName(activeArticle, currentArticle) {
  if (activeArticle === currentArticle) {
    return "show-article";
  } else {
    return "hide-article";
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState("First Article");

  return (
    <>
      <article
        className={`active ${getActiveClassName(
          activeArticle,
          "First Article"
        )}`}
      >
        <h1>About Me</h1>
        <p>
          Sarvnaz är 25 år gammal innan dess hade pluggat till sjuksköterska och
          jobbar vid sidan av sina studie hos Ikea, en av Sarvnaz bästa vän
          märkte att sarvnaz mår inte bra under sina studie och rekommderarde
          att hon testar programmering. hon gillade atta kunna skapa websidor
          och jobba både med kreativitet samt probemlösning då hon slutade från
          universitet och började plugga frontend-development hos changemaker
          education .
        </p>
        <img className="me" src={me} alt="" />
      </article>
      <article
        className={`active ${getActiveClassName(activeArticle, "2nd Article")}`}
      >
        <h1>Idea</h1>
        <p>
          Jag ska göra en simple version av the magic 8-ball. Jag hade gjort ett
          liknande project som nybörjare det bli intressant att jag göra det
          igen med mina nuvarande kunskap
        </p>
      </article>
      <article
        className={`active ${getActiveClassName(activeArticle, "3rd Article")}`}
      >
        <h1>Design</h1>
        <p>Jag ska köra en simple design fast med mycket färg.</p>
      </article>

      <div className="article">
        <button
          onClick={() => {
            setActiveArticle((currentArticle) => {
              if (currentArticle === "First Article") {
                return "2nd Article";
              } else if (currentArticle === "2nd Article") {
                return "3rd Article";
              } else {
                return "First Article";
              }
            });
          }}
        >
          Next!
        </button>
      </div>
    </>
  );
}

export default App;
