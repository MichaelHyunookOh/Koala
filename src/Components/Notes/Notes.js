import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import Draggable from "react-draggable";
import "./Notes.css";

export const Notes = (props) => {
  const [text, setText] = useState("hello");
  const [editText, setEditText] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const [noteColor, setNoteColor] = useState("rgb(234, 245, 90)");
  const [newNoteColor, setNewNoteColor] = useState("rgb(234, 245, 90)");

  const editForm = () => {
    return (
      <form className="editForm">
        <input
          type="text"
          defaultValue={text}
          onChange={(e) => setEditText(e.target.value)}
        ></input>
        <input
          type="text"
          defaultValue={noteColor}
          onChange={(e) => setNewNoteColor(e.target.value)}
        ></input>
        <button type="button" onClick={handleEditClose}>
          Submit
        </button>
      </form>
    );
  };

  const handleEditOpen = () => {
    setEditClicked(true);
  };

  const handleEditClose = (e) => {
    setEditClicked(false);
    setText(editText);
    setNoteColor(newNoteColor);
  };

  const deleteCard = () => {
    props.deleteCard(props.id);
  };

  return (
    <>
      <Draggable>
        <div className="noteCard" style={{ backgroundColor: noteColor }}>
          <p>{text}</p>
          <button type="button" onClick={handleEditOpen}>
            edit{" "}
          </button>
          <button onClick={deleteCard}>delete </button>
        </div>
      </Draggable>
      {editClicked ? editForm() : ""}
    </>
  );
};
