import React, { useState } from "react";
export default function TextForm(props)
{
  const { heading = "set heading here", mode } = props;
  const handleUpClick = () => {
    setText("you have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleDownClick = () => {
    setText("you have clicked on handleDownClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const ClearText = () => {
    setText("you have clicked on clear text button");
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleOnChange = (event) => {
    // console.log("ON CHANGE");
    setText(event.target.value);

  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };
  const [text, setText] = useState(``);
  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: mode === "light" ? "white" : "#44505c",
              color: mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          copyText
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={ClearText}>
          clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h2>your text summary</h2>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((el) => el.length !== 0).length
          }{" "}
          words and {text.replace(/\s/g, "").length} characters
        </p>

        <p>
          {0.008 * text.split(" ").filter((el) => el.length !== 0).length}{" "}
          Minutes Read
        </p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox above  to preview here"}
        </p>
      </div>
    </>
  );
}
