import { useEffect, useState } from 'react';
import './App.css';
import AppBar from './Component/AppBar';
import Input from './Component/Input.js';
import Card from './Component/cards/index.js';

function App() {
  const initialNotes = JSON.parse(localStorage.getItem('myNotes')) || [];

  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    localStorage.setItem('myNotes', JSON.stringify(notes));
  }, [notes]);
  
  return (
    <div className="App">
       <AppBar />
       <Input setNotes={setNotes} notes={notes}/>
       <Card notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
