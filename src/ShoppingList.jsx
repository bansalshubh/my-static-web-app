import React from "react";

const ShoppingList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ><b class="cross">+</b></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ShoppingList;
