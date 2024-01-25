import React, { useState } from 'react'
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import ColorizeRoundedIcon from '@mui/icons-material/ColorizeRounded';
import './style.css'
import { ChromePicker } from 'react-color';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
function Input({setNotes,notes}) {
    const [note, setNote] = useState({});
    const [expanded,setExpended] = useState(false)
    const [showPicker, setShowPicker] = useState(false);


 function addNote(){

    if (!note.title || !note.title.trim()) {
      // Check if title is undefined, null, or contains only whitespaces
      alert('Please fill in the title field');
      return;
    }

  setExpended(!expanded)
  setNotes([...notes,note])
  setNote({})
 }

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  
  return (
    <div className='input-container'>
       { expanded ? (
            <div className='expended'>
              <input type='text'
               placeholder='Title' 
               value={note.title}
               onChange={(e)=> setNote({...note,title:e.target.value})}
               />
               <input type='text'
               placeholder='Description' 
               value={note.description}
               onChange={(e)=> setNote({...note,description:e.target.value})}
               />
               <div className='color-container'>
              <span onClick={togglePicker}>
                  {showPicker ? '' :  <ColorizeRoundedIcon /> } 
                  {showPicker && (
                   <>
                  <span onClick={()=> togglePicker}><CloseRoundedIcon /></span>
                  <ChromePicker
                  color={note.color}
                  onChange={(newColor) => setNote({...note, color: newColor.hex})}
                  className='color-picker'
                  />
                 
                   </>
                )}
              </span>
               
                <span className='add-note' onClick={addNote}><NoteAddRoundedIcon className='note-icon'/></span>
                </div>
            </div>  
          )
       :( 
        <div className='not-expended'>
          <input 
          type='text'
          placeholder='Take a note..'
          onFocus={()=> setExpended(true)}
          value=""
         />
          <span className='add-note' onClick={addNote}><NoteAddRoundedIcon className='note-icon'/></span>
         </div>
       )
       }
         
    </div>
  )
}

export default Input