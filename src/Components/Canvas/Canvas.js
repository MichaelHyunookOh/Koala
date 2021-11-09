import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { Notes } from "../Notes/Notes";
import "./Canvas.css";

export const Canvas = () => {
  const [notesList, setNotesList] = useState([]);
  const [uuid, setUuid] = useState(_uniqueId("KEY_"));

  const handleAdd = () => {
    setNotesList((notesList) => [...notesList, uuid]);
    setUuid(_uniqueId("KEY_"));
  };

  const handleDeleteAll = () => {
    setNotesList(notesList.filter((note) => !note));
  };

  const deleteCard = (id) => {
    console.log(id);
    console.log(notesList);
    console.log(notesList.filter((item) => item !== id));
    setNotesList(notesList.filter((item) => item !== id));
  };

  return (
    <div className="canvasContainer">
      <div className="actions">
        <button onClick={handleAdd} type="button">
          add
        </button>
        <button onClick={handleDeleteAll} type="button">
          Delete All
        </button>
      </div>

      {notesList.map((id) => (
        <Notes id={id} key={id} deleteCard={deleteCard} />
      ))}
    </div>
  );
};
