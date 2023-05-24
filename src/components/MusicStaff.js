import { useEffect, useRef } from 'react'
import Vex from 'vexflow'

const MusicStaff = ({ rootNote, mode, octave }) => {

    const scoreRef = useRef(null);
    const scoreDivRef = useRef(null);
    const {
        Renderer,
        Stave,
        StaveNote,
        Voice,
        Formatter,
        Accidental
    } = Vex.Flow;
        

    /**
     * Returns an array of integers representing the half-steps in between
     * the notes of the parameter mode.
     * @param {string} modeName The chosen mdoe by the user. 
     */
    const getMode = (modeName) => {
        let mode;
        switch(modeName) {
            case "major":
                mode = [2, 2, 1, 2, 2, 2, 1];
                break;
            case "dorian":
                mode = [2, 1, 2, 2, 2, 1, 2];
                break;
            case "phrygian":
                mode = [1, 2, 2, 2, 1, 2, 2];
                break;
            case "lydian":
                mode = [2, 2, 2, 1, 2, 2, 1];
                break;
            case "mixolydian":
                mode = [2, 2, 1, 2, 2, 1, 2];
                break;
            case "minor":
                mode = [2, 1, 2, 2, 1, 2, 2];
                break;
            case "locrian":
                mode = [1, 2, 2, 1, 2, 2, 2];
                break;
            default:
                // default to Ionian
                mode = [2, 2, 1, 2, 2, 2, 1];
                break;
        }
        return mode;
    }

    const createStaveNote = (rootNote, octave) => {
       return rootNote.includes("#") ? 
       new StaveNote({ keys: [`${rootNote}/${octave}`], duration: "8" }).addModifier(new Accidental("#")) : 
       new StaveNote({ keys: [`${rootNote}/${octave}`], duration: "8" });

    }

    const getStaveNotes = (rootNote, mode, octave) => {
        console.log(`${rootNote} ${mode} ${octave}`);
        const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const chosenMode = getMode(mode)
        let rootIndex = notes.indexOf(rootNote);

        let staveNoteArray = [createStaveNote(rootNote, octave)];

        chosenMode.forEach(halfNotes => {
            rootIndex += halfNotes;
            console.log(`halfNotes: ${halfNotes}`)
            //check if new octave started
            if(rootIndex % 12 !== rootIndex) { octave++; }
            rootIndex %= 12;
            staveNoteArray.push(createStaveNote(notes[rootIndex], octave))
        });
        return staveNoteArray;
    }
    
    useEffect(() => {
        if (!scoreRef.current) {
            scoreRef.current = new Renderer(scoreDivRef.current, Renderer.Backends.SVG);
        }
        // Configure the rendering context.
        scoreRef.current.resize(scoreDivRef.current.clientWidth, 250);
        const context = scoreRef.current.getContext();

        // Create a stave of width c at position a, b with params(a,b,c).
        const stave = new Stave(10, 50, scoreDivRef.current.clientWidth - 25);
        
        // Add a clef and time signature.
        stave.addClef('treble').addTimeSignature('4/4');

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        // Create a voice in 4/4 and add above notes
        const voice = new Voice({ num_beats: 4, beat_value: 4 });
        voice.addTickables(getStaveNotes(rootNote, mode, octave));

        // Format and justify the notes to 400 pixels.
        new Formatter().joinVoices([voice]).format([voice], scoreDivRef.current.clientWidth - 100);

        // Render voice
        voice.draw(context, stave);
        console.log(scoreDivRef.current.clientWidth);

        return () => { context.clear(); };
      }, [rootNote, mode, octave])
    
    return (
    <div ref={scoreDivRef} className={'staff'}></div>
    )
}

export default MusicStaff