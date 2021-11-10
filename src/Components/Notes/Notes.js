import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import Edit from "./Icons/editNote.png";
import { Modal } from "./Modal/Modal";
import Draggable from "react-draggable";
import "./Notes.css";

export const Notes = (props) => {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [noteColor, setNoteColor] = useState("rgb(234, 245, 90)");
  const [newNoteColor, setNewNoteColor] = useState("rgb(234, 245, 90)");
  const [show, setShow] = useState(false);

  const editForm = () => {
    return (
      <div className="formContainer">
        <form className="editForm" onSubmit={handleEditClose}>
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
          <button type="submit" id="submitEditButton">
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
    e.preventDefault();
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
          <div className="noteActions">
            <button id="editNote" type="button" onClick={showModal}>
              <img src={Edit} alt="edit" />
            </button>
            <button id="deleteNote" onClick={deleteCard}>
              X{" "}
            </button>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </Draggable>
      <Modal show={show}>{editForm()}</Modal>
    </>
  );
};
