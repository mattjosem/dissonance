import Select from 'react-select'


const Selections = ({ updateSelections }) => {
    
    const notes = [
        {value: 'C', label: 'C'},
        {value: 'C#', label: 'C#'},
        {value: 'D', label: 'D'},
        {value: 'D#', label: 'D#'},
        {value: 'E', label: 'E'},
        {value: 'F', label: 'F'},
        {value: 'F#', label: 'F#'},
        {value: 'G', label: 'G'},
        {value: 'G#', label: 'G#'},
        {value: 'A', label: 'A'},
        {value: 'A#', label: 'A#'},
        {value: 'B', label: 'B'},
    ]
    const modes = [
        {value: 'major', label: 'Ionian (Major)'},
        {value: 'dorian', label: 'Dorian'},
        {value: 'phrygian', label: 'Phrygian'},
        {value: 'lydian', label: 'Lydian'},
        {value: 'mixolydian', label: 'Mixolydian'},
        {value: 'minor', label: 'Aeolian (Minor)'},
        {value: 'locrian', label: 'Locrian'},
    ]
  const octaves = [
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
    ]
    const lengths = [
        {value: '.8', label: 'Whole Note'},
        {value: '.6', label: 'Half Note'},
        {value: '.4', label: 'Quarter Note'},
        {value: '.2', label: 'Sixteenth Note'},
    ]
  
    const colorStyles = {
        container: (styles) => ({ ...styles, padding: '5px 0px', display: 'flex', textAlignLast: 'center'}),
        control: (styles) => ({ ...styles, width: '100%', fontSize: 'max(1.5vw, 16px)', borderRadius: '30px' }),
        option: (styles) => ({ ...styles, borderRadius: '20px' }),
        menu: (styles) => ({ ...styles, borderRadius: '20px' })
    }
    
    return (
        <div>
            <Select 
                placeholder='Select root note' 
                options={notes} 
                styles={colorStyles}
                onChange={(e) => updateSelections('rootNote', e.label, e.value)}/>
            <Select placeholder='Select mode'
                options={modes}
                styles={colorStyles}
                onChange={(e) => updateSelections('mode', e.label, e.value)}/>
            <Select 
                placeholder='Select starting octave' 
                options={octaves} 
                styles={colorStyles}
                onChange={(e) => updateSelections('startingOctave', e.label, e.value)}/>
            <Select 
                placeholder='Select note length'
                options={lengths} 
                styles={colorStyles}
                onChange={(e) => updateSelections('noteLength', e.label, e.value)}/>
        </div>
    )
}

export default Selections