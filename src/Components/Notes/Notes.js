import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { Modal } from "./Modal/Modal";
import Draggable from "react-draggable";
import "./Notes.css";

export const Notes = (props) => {
  const [text, setText] = useState("hello");
  const [editText, setEditText] = useState("hello");
  const [noteColor, setNoteColor] = useState("rgb(234, 245, 90)");
  const [newNoteColor, setNewNoteColor] = useState("rgb(234, 245, 90)");
  const [show, setShow] = useState(false);

  const editForm = () => {
    return (
      <div className="formContainer">
        <form className="editForm">
          <label for="textInput">Edit text</label>
          <textarea
            id="textInput"
            defaultValue={text}
            onChange={(e) => setEditText(e.target.value)}
          ></textarea>
          <label for="colorInput">Edit Color</label>
          <input
            type="text"
            id="colorInput"
            defaultValue={noteColor}
            onChange={(e) => setNewNoteColor(e.target.value)}
          ></input>
          <button type="button" id="submitEditButton" onClick={handleEditClose}>
            Submit
          </button>
        </form>
      </div>
    );
  };

  const showModal = () => {
    setShow(true);
  };

  const handleEditClose = (e) => {
    setShow(false);
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
          <button type="button" onClick={showModal}>
            edit{" "}
          </button>
          <button onClick={deleteCard}>delete </button>
        </div>
      </Draggable>
      <Modal show={show}>{editForm()}</Modal>
    </>
  );
};
