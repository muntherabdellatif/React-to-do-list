import React from "react";
import Heading from "./Heading";
import Item from "./Item";

function App() {
  const [inputText, setInputText] = React.useState("");
  let [itemsList, setItemslist] = React.useState([]);

  // input text
  function changeInputText(event) {
    let currentInputText = event.target.value;
    setInputText(currentInputText);
  }
  // add item to list
  function addToList() {
    setItemslist((lastItemsList) => [...lastItemsList, inputText]);
    setInputText("");
  }
  // delete items
  function deleteItem(id) {
    setItemslist((last) => {
      return last.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={changeInputText} type="text" value={inputText} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.map((toDoItems, index) => (
            <Item
              id={index}
              key={index}
              text={toDoItems}
              onClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
