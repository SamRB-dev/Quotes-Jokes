// imports
import { useEffect, useState } from "react";
import "../css/jokes.css";

function Joke() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    const getJoke = async () => {
      try {
        // Get response
        const response = await fetch("https://v2.jokeapi.dev/joke/any");
        const data = await response.json();
        setJoke(data);
        console.log("Rendered");
      } catch (error) {
        console.error(error.message);
      }
    };
    getJoke();

    setInterval(() => {
      getJoke();
    }, 300000);
  }, []);

  if (joke.type === "twopart") {
    return (
      <>
        {joke && (
          <div id="container">
            <h1 id="punchline" className="Custom-Gradiant-Linear-1">
              {joke.setup} {joke.delivery}
            </h1>
            <div id="details">
              <h3>Category: <span id="span-value" className="Custom-Gradiant-Linear-2">{joke.category}</span></h3>
            </div>
          </div>
        )}
      </>
    );
  } else if (joke.type === "single") {
    return (
      <>
        {joke && (
          <div id="container">
            <h1 id="punchline" className="Custom-Gradiant-Linear-1">{joke.joke}</h1>
            <div id="details">
              <h3>Category: <span id="span-value" className="Custom-Gradiant-Linear-2">{joke.category}</span></h3>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Joke;
