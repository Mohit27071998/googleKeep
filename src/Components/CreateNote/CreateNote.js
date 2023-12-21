import React, { useState, useEffect, useRef } from "react";
import DisplayNote from "../DisplayNote/DisplayNote";
import { IoAddCircle } from "react-icons/io5";
import "./CreateNote.css";
import { CgColorPicker } from "react-icons/cg";
import { RiEditCircleFill } from "react-icons/ri";
import { SketchPicker } from "react-color";

const CreateNote = ({ search }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [note, setNote] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [currColor, setCurrColor] = useState("#ffffff");
  const [open, setOpen] = useState(false);

  const formRef = useRef(null);
  const originalNoteOrder = JSON.parse(localStorage.getItem("todos")) || [];

  const handleOpen = () => {
    setOpen(!open);
  };

  const HandleAddNote = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    if (selectedNote && savedTodos.length > 0) {
      const updatedNote = note.map((noteItem) =>
        noteItem.id === selectedNote.id
          ? { ...noteItem, title, desc, color: currColor }
          : noteItem
      );

      localStorage.setItem("todos", JSON.stringify(updatedNote));
      setNote(updatedNote);

      alert("Note Edited Successfully");
      setSelectedNote(null);
    } else {
      const noteText = {
        id: Date.now(),
        title: title,
        desc: desc,
        color: currColor,
      };

      const updatedNote = [...note, noteText];
      localStorage.setItem("todos", JSON.stringify(updatedNote));
      setNote(updatedNote);

      alert("Note Added Successfully");
    }

    setTitle("");
    setDesc("");
  };

  const handleEdit = (id) => {
    const selectedNote = note.find((noteItem) => noteItem.id === id);
    setSelectedNote(selectedNote);
    setTitle(selectedNote.title);
    setDesc(selectedNote.desc);
    setCurrColor(selectedNote.color || "#ffffff");
    setShow(true);
  };

  const handleDelete = (id) => {
    const deleteConfirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (deleteConfirmed) {
      const deleteNote = note.filter((noteItem) => noteItem.id !== id);
      setNote(deleteNote);
      localStorage.setItem("todos", JSON.stringify(deleteNote));
      alert("Note Deleted Successfully");
    }
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setNote(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOnChange = (color) => {
    setCurrColor(color.hex);
  };

  return (
    <>
      <div className="main_note">
        <form className="form" ref={formRef}>
          {selectedNote ? (
            <RiEditCircleFill
              onClick={() => HandleAddNote()}
              className="addNote"
            />
          ) : (
            <IoAddCircle onClick={() => HandleAddNote()} className="addNote" />
          )}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={() => setShow(true)}
          />
          <CgColorPicker onClick={handleOpen} className="addColor" />
          {show && (
            <>
              <textarea
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
              {open && (
                <div className="colorPicker">
                  <SketchPicker
                    color={currColor}
                    onChangeComplete={handleOnChange}
                  />
                </div>
              )}
            </>
          )}
        </form>
      </div>

      <DisplayNote
        setNote={setNote}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        search={search}
        originalNoteOrder={originalNoteOrder}
      />
    </>
  );
};

export default CreateNote;
