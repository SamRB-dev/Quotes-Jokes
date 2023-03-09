// Imports
import "../../css/QuoteofdaDay.css";
import { useId } from "react";

function QoDComp(props) {
  const containerID = useId();
  return (
    <div className="qod-container" id={containerID}>
      <div className="quote-of-the-day-wrapper Custom-Gradiant-Linear-1">
        <h2>{props ? props.title : "Loading.."}</h2>
        <h1 id="quote">{props ? props.quote : "Loading.."}</h1>
        <h3 id="quote-author">- {props ? props.author : "Loading.."}</h3>
      </div>
      <h4 id="quote-details">
        Category:{" "}
        <span id="quote-details-value" className="Custom-Gradiant-Linear-2">
          {props ? props.category : "Loading.."}
        </span>
        Source:{" "}
        <span id="quote-details-value" className="Custom-Gradiant-Linear-2">
          <a href={props ? props.permalink : "#"}>They Said So®</a>
        </span>
      </h4>
    </div>
  );
}

export default QoDComp;
