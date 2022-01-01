import React from "react";

function Item(para) {
  return (
    <li
      onClick={() => {
        para.onClicked(para.id);
      }}
    >
      {para.text}
    </li>
  );
}

export default Item;
