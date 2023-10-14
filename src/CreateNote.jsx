import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const inputEvent = (e) => {
    // console.log(e.target.value);

    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({ title: "", content: "" });
  };

  const expandIt = () => {
    setExpand(true);
  };
  return (
    <>
      <div className="main-note">
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              name="title"
              value={note.title}
              onChange={inputEvent}
            />
          ) : null}
          <textarea
            rows="5"
            column="5"
            placeholder="Write a note here..."
            name="content"
            value={note.content}
            onChange={inputEvent}
            onClick={expandIt}
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
