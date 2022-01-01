import React from "react";
import Heading from "./Heading";
import Item from "./Item";
import Form from "./Form"

function App() {
 
  let [itemsList, setItemslist] = React.useState([]);
  // add item to list
  function addToList(inputText) {
    setItemslist((lastItemsList) => [...lastItemsList, inputText]);
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
      <Form add={addToList} />
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
