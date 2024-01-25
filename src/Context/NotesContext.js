import { createContext } from "react";
import { useState } from 'react';

export const notesContext = createContext();

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [note, setNote] = useState({});
  
    const addNote = (note) => {
      setNotes([...notes, note]);
    };
  
    const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    };
  
    const updateNote = (id, title, description) => {
      setNotes(
        notes.map((note) =>
          note.id === id
            ? { id: id, title: title, description: description }
            : note
        )
      );
    };
  
    const editNote = (id) => {
      setEdit(true);
      setNote(notes.find((note) => note.id === id));
    };
  
    const cancelEdit = () => {
      setEdit(false);
    };
  
    const searchNote = (search) => {
    return (
      <notesContext.Provider value={}>
        {children}
        </notesContext.Provider>
        
    )}
    export default NotesProvider;