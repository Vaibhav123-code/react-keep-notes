import React, { useState } from 'react'
import './style.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { ChromePicker } from 'react-color';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
function Card({notes,setNotes}) {
  const [edit,setEdit] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = (index) => {
    setSelectedNoteIndex(index);
    setShowPicker(!showPicker);
  };
  function colorChange(newColor) {
    if (selectedNoteIndex !== null) {
      const newArray = [...notes];
      newArray[selectedNoteIndex].color = newColor.hex;
      setNotes(newArray);
    }
  }
   
    function deleteNote(index){
      const newArray = [...notes];
      newArray.splice(index,1);
       setNotes(newArray);
    }
    function editFlag(index) {
      setEdit(!edit);
      setSelectedNoteIndex(index);
    }
    function editTitle(title){
       const newNote = [...notes];
       newNote[selectedNoteIndex].title = title;
       setNotes(newNote);
    } 
    function editDes(description){
      const newNote = [...notes];
      newNote[selectedNoteIndex].description = description;
      setNotes(newNote);
   } 
   
  return (
    <div className='card-container'>
      { 
        notes.length > 0 ? (
          notes.map((note,index)=>(
            <div key={index} style={{backgroundColor:note.color}} className='card-content'>
               <h4>{note.title ? note.title.toUpperCase() : ''}</h4>
              <p>{note.description}</p>
              {
                edit && selectedNoteIndex === index && (
                  <div className='edit-input'>
                    <input type='text'
                    placeholder='Title' 
                    value={note.title}
                    onChange={(e)=> editTitle(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Description' 
                    value={note.description}
                    onChange={(e)=> editDes(e.target.value)}
                    />
                   <span onClick={()=> editFlag(index)}><CloseRoundedIcon /></span>
                  </div>
                )
              }
              {showPicker && selectedNoteIndex === index && (
                <div className='color-container'>
                  <ChromePicker
                    color={note.color}
                    onChange={(newColor) => colorChange(newColor)}
                    className='color-picker'
                  />
                  <span onClick={()=> togglePicker(index)}><CloseRoundedIcon /></span>
                </div>
              )}
              <div className='card-icons'>
               <span onClick={()=> deleteNote(index)}><DeleteRoundedIcon/></span>
               <span onClick={()=> editFlag(index)}><EditRoundedIcon /></span>
               <span onClick={()=> togglePicker(index)}><ColorLensRoundedIcon /></span>
              </div>
              </div>
            ))
        ) : (
           <h1> no notes available</h1>
        )
       
      }
    </div>
  )
}

export default Card
