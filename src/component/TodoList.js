import React, { useState } from "react";
import { Button, Empty, Input } from "antd";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemInList,
  deleteListItem,
  editItemInList,
} from "../redux/action/action";

function TodoList() {
  const [emptyError, setEmptyError] = useState(false);
  const [todoListItem, setTodoListItem] = useState("");
  const [editItemId, setEditeItemId] = useState("");
  const list_of_todo_item = useSelector((state) => state.AddDataInReducer);
  console.log(list_of_todo_item.map((i) => i.id));
  const dispatch = useDispatch();
  const setDataHandler = () => {
    if (!todoListItem) {
      setEmptyError(true);
      return;
    }
    dispatch(addItemInList(todoListItem));

    setTodoListItem("");
  };
  const deleteItemHandler = (id) => {
    dispatch(deleteListItem(id));
  };
  const editItemHandler = () => {
    dispatch(editItemInList(editItemId, todoListItem));
    setEditeItemId("");
    setTodoListItem("");
  };

  return (
    <div className="container">
      TodoList
      <div className="inputfield">
        <Input
          value={todoListItem}
          placeholder="Basic usage"
          type="text"
          onChange={(e) => {
            setTodoListItem(e.target.value),
              e.target.value.length >= 1 ? setEmptyError(false) : null;
          }}
        />

        {emptyError ? <p className="errorClass">Please Enter Task</p> : null}
      </div>
      <div>
        {editItemId ? (
          <Button
            className="btnForAddItem"
            type="primary"
            onClick={() => editItemHandler()}
          >
            Save
          </Button>
        ) : (
          <Button
            className="btnForAddItem"
            type="primary"
            onClick={() => setDataHandler()}
          >
            ADD
          </Button>
        )}
      </div>
      <div>
        {list_of_todo_item.length >= 1 ? (
          list_of_todo_item.map((item) => {
            return (
              <div className="mainContainer" key={item.id}>
                <h4 className="listItem">{item.list}</h4>

                <div className="handleBtnsContainer">
                  <Button
                    className="btnForEdit"
                    type="secondary"
                    onClick={() => {
                      setTodoListItem(item.list), setEditeItemId(item.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btnForDelete"
                    type="danger"
                    onClick={() => deleteItemHandler(item.id)}
                  >
                    delete
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default TodoList;
