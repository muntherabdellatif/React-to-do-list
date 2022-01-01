import React from "react";

function Form (para) {
    const [inputText, setInputText] = React.useState("");
    // input text
    function changeInputText(event) {
        let currentInputText = event.target.value;
        setInputText(currentInputText);
    }
    return(     
    <div className="form">
        <input onChange={changeInputText} type="text" value={inputText} />
        <button 
            onClick={()=>{
                para.add(inputText);
                setInputText("");
                }}>
            <span>Add</span>
        </button>
    </div>);
}

export default Form ;