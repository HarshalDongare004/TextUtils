import React, { useState } from 'react';
 export default function TextForm(props ) {

    // CONVERT TO UPPERCASE
    const handleupClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text are converted to upper cased", "success")
    }

    // CONVERT TO LOWERCASE
    const handleloClick = () =>{
        // console.log("lowercase was clicked" + text);
        let newTxt = text.toLowerCase()
        setText(newTxt);
        props.showAlert("Text are converted to lowercase", "success")
    }
    // CLEAR CONTENT
    const handleClear = (text) =>{
        // console.log("lowercase was clicked" + text);
        let newTxt = "";
        setText(newTxt);
        props.showAlert("Clearred the text area", "warning")
    }
    // COPY THE TEXT
    const handleCopy = () =>{
        
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text are copied to clipboard", "success")
    }
    // REMOVE EXTRA SPACES
    const handleExtraSpaces = () =>{
            let nTxt=text.split(/[  ]+/);
            setText(nTxt.join(" "))
            props.showAlert("Removed extra spaces", "success")
    }

    // const capitalizefirstLetter = (text) => {

    //     setText(text.replace(/\b(\w)/g, s=>s.toUpperCase()))

    //     // setText(words.every.toUpperCase())

    // }
    //handle number extracting

//     const  handleNumExtract = ()=>{
//     const regex =/[0-9//]/g ;
//     const digits = text.match(regex);
//     const res = digits.join("");

//     setText(res);
// } 
    const handleonChange = (event) => {
        // console.log("on change")
        setText(event.target.value )
    }

    
     const [text, setText] = useState('');
    //  text = "harshsl"; wrong way
    // setText('New Text');   correct way
     return (
         <>
         <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            
            {/* <h1>{props.heading} - {text}</h1> */}
            <h1>{props.heading}</h1>

            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">{props.heading}</label> */}
                <textarea className="form-control"  value ={text}  onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'gray':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>

                <br/>
                <button className="btn btn-primary mx-4" onClick={handleupClick}> Convert to uppercase </button>
                
                <button className="btn btn-primary" onClick={handleloClick}> Convert to lowercase </button>

                <button className="btn btn-primary mx-4" onClick={handleClear}> Clear </button>

                <button className="btn btn-primary mx-4" onClick={handleCopy}> Copy Text </button>

                <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}> Remove extra space </button>

                {/* <button className="btn btn-primary" onClick={handleNumExtract}> capitalize </button> */}
            </div>
         </div>

         <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> {/* my-3 is bootstrap property*/ }
            <h2> your text sumamry</h2>
            <p>You have write {text.split(" ").length - 1} words and {text.length} characters.</p>
            <p>{0.008* text.split(" ").length -0.008} minutes to read the sentence.</p>

            <h3> Preview</h3>
            <p>{text.length>0? text:"Enter something to preview it"}</p>
         </div>

         </>
     )
   }