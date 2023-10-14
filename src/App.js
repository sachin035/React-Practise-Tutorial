import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("clicked");

    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currData, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />
      {addItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
