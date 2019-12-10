import React from 'react';


const SingleNote = (props) => {


    const {text} = props.note;

        return (
            <div>
                    <p className="singleParagraphNote">{text}</p>
            </div>

        )
};

export default SingleNote;