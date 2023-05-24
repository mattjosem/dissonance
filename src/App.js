import './App.css'
import Header from './components/Header'
import Selections from './components/Selections'
import { useState } from 'react'
import FretboardVisualizer from './components/FretboardVisualizer'
import MusicStaff from './components/MusicStaff'

function App() {

  const [selection, setSelection] = useState ({
    rootNote: 'C',
    mode: 'major',
    startingOctave: 4,
    noteLength: .2
  });
  
  const updateSelections = (key, label, value) => {
    setSelection(prevSelection => ({
      ...prevSelection,
      [key]: value
    }));
  }

  return (
    <div className='container'>
      <h1>
        <Header />
      </h1>
      <Selections updateSelections={updateSelections} />
      <FretboardVisualizer rootNote={selection.rootNote} mode={selection.mode}/>
      <MusicStaff rootNote={selection.rootNote} mode={selection.mode} octave={selection.startingOctave}/>
    </div>
  );
}

export default App;
