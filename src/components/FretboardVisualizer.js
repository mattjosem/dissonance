import { Fretboard } from '@moonwave99/fretboard.js'
import { useRef, useEffect } from 'react'

const FretboardVisualizer = ({ rootNote,  mode }) => {

  const fretboardRef = useRef(null);
  const fretboardDivRef = useRef(null) 

  useEffect(() => {
    if (!fretboardRef.current) {
      fretboardRef.current = new Fretboard({
        el: fretboardDivRef.current,
        dotText: (dot) => dot.note,
        topPadding: 60,
        bottomPadding: 60,
      });
    }
    fretboardRef.current.renderScale({
      root: rootNote,
      type: mode
    })
    return () => {};
  }, [rootNote, mode])

  return (
    <div ref={fretboardDivRef} className={'fretboard'}></div>
  )
}

export default FretboardVisualizer