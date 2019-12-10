import React from 'react';
import SingleNote from './SingleNote';

const NotesList = (props) => {


    const notes = props.list.map( note =>
        <SingleNote
            key={note.id}
            note={note}
        />
    );

    return (
        <div>
            <div className="HistoryNotes">
                <div className="historyNotesDetail">
                    <h3>Historia notatek</h3>
                    {notes.slice(0,5).length > 0 ? notes.slice(0,5) : <p>Brak notatek</p>}
                </div>
            </div>
            <div className="secondActivityContainer"></div>
        </div>
    )
};

export default NotesList;