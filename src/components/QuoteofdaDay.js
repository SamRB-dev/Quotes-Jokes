// Imports
import QoDComp from "./propcomponents/QoDComp";
import React, { useEffect, useState } from "react";

// Globals
const category = {
  0: "art",
  1: "funny",
  2: "inspire",
  3: "life",
  4: "love",
  5: "management",
  6: "sports",
  7: "students",
};

// Component
function QOD(props) {
  const [qod, setQod] = useState([]);
  let url =
    props.qid !== undefined
      ? `https://quotes.rest/qod?category=${category[props.qid]}`
      : "https://quotes.rest/qod";

  useEffect(() => {
    const GetQuote = async () => {
      // fetch(url)
      //   .then((response) => response.json())
      //   .then((data) => setQod(data.contents.quotes[0]))
      //   .catch((error) => console.log(error.message));
      try {
        const response = await fetch(url);
        const data = await response.json();
        const quote = data.contents.quotes[0];
        setQod(quote);
        localStorage.setItem(`qod-${props.qid}`, JSON.stringify(quote));
      } catch (error) {
        console.error(error.message);
      }
    };

    let data = localStorage.getItem(`qod-${props.qid}`);
    if (data === null) {
      GetQuote();
    } else {
      setQod(JSON.parse(data));
      setInterval(() => {
        localStorage.clear();
        GetQuote();
      }, 600000);
    }

    window.onbeforeunload = () => {
      localStorage.clear();
    };
  }, [url, props.qid]);

  return (
    <QoDComp
      id={props.id}
      title={qod.title}
      quote={qod.quote}
      author={qod.author}
      category={qod.category}
      permalink={qod.permalink}
    />
  );
}

export default QOD;
