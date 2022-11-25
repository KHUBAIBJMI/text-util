import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
     props.showAlert("Converted to Upper Case","sucsess")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","sucsess")

  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("your Text is clear","sucsess")

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleRemoveSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("remove Extra Space","sucsess")

  }

  const handleCopyText =()=>{
    //  let text = document.getElementById("myBox");
    // text.select();
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text)
    props.showAlert("copy to clipBoard","sucess")

  }
  return (
    <>
    <div className = "container"  style = {{color : props.mode === "dark" ? "white": "#042743"}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          className="form-control my-4"
          id="myBox"
          rows="5"
          value={text}
          onChange={handleOnChange}
          style = {{backgroundColor : props.mode === "dark" ? "#042743": "white",color : props.mode === "dark" ? "white": "#042743" }}
        ></textarea>
      </div>

      <div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick} disabled = {text.length === 0}>
          Convert To UpperCase
        </button>
        <button className = "btn btn-primary mx-3 my-2" onClick = {handleLowClick} disabled = {text.length ===0}>
          Convert To Lovercase</button>
          <button className = "btn btn-primary mx-3 my-2" onClick = {handleClearClick} disabled = {text.length ===0} >
            Clear Text </button>
            <button className= "btn btn-primary mx-3 my-2" onClick = {handleRemoveSpace} disabled = {text.length ===0}>Remove Extra Space</button>
            <button className= "btn btn-primary mx-2" onClick = {handleCopyText}disabled = {text.length ===0}>Copy Text</button>
      </div>

      <div className = "container"  style = {{backgroundColor : props.mode === "dark" ? "#042743": "white",color : props.mode === "dark" ? "white": "#042743"}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element=>{return element.length!==0})).length } word and {text.length} charecters</p>
    <p>you ca read in {0.008*text.split(" ").filter((element=>{return element.length!==0})).length} minute</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Your Text here to Preview it Here"}</p>
      </div>
      </div>
    </>
  );
}
