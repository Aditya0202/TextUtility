import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("Enter your text here");
  const [color,setColor]=useState("black");

  const handleUpperCaseClick = () => {
    console.log("UpperCase was clicked!")
    let transformedText = text.toUpperCase();
    setText(transformedText);
  }

  const handleLowerCaseClick = () => {
    console.log("LowerCase was clicked!")
    let transformedText = text.toLowerCase();
    setText(transformedText);
  }

  const handleClearConsole = () => {
    console.log("console cleared!")
    setText("");
  }

  const handleOnchange = (event) => {
    console.log("On change called!")
    setText(event.target.value);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };

  const replacecasefunc = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text));
  }

  const reverseText=()=>{
    let newText= text.split("").reverse().join("");
    setText(newText);
  }   

  const handleColor=()=>{
    let mycolor=prompt("enter your color name");
    setColor(mycolor);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(text + " copied ");
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  }

  const wCase = () => {
    let newText = "";
    let u = true;
    text.split("").forEach(el => {
        newText += (u === true) ? el.toUpperCase() : el.toLowerCase();
        u = (u === true) ? false : true;
    });
    setText(newText);
}

  return (
    <>
    <div className='container'>
        <div className='my-3'>
            <label htmlFor="mainContent" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} style={{color:color}} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearConsole}>clear</button>
        <button className="btn btn-primary mx-2" onClick={wCase}>wCase</button>
        <button className="btn btn-success mx-2" onClick={handleCapitalizeWordClick}>capitalize words</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-2" onClick={replacecasefunc}>replace</button>
        <button className="btn btn-primary mx-2" onClick={reverseText}>Reverse</button>
        <button className="btn btn-primary mx-2" onClick={handleColor}>Change text color</button>
        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy To Clipboard</button>
    </div>
    <div className="container my-2">
      <h3>Text Summary</h3>
      <p className='wordsandchars'>{text.split(' ').filter(function(n) { return n !== '' }).length} words, {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
