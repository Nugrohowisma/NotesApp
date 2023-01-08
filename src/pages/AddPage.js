import React from "react";
import { addNote } from "../utils/data";
import AddNote from "../components/AddNote";
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(notes) {
    addNote(notes);
    navigate("/");
  }

  return (
    <section>
      <h4>Add Note</h4>
      <AddNote addNote={onAddNoteHandler} />
      <HomeNav />
    </section>
  );
}

export default AddPage;
