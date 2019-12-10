import React from 'react';


const SingleBankNumber = (props) => {


    const {number} = props.num;

    return (
        <div>
            <p className="singleParagraphNote">{number}</p>
        </div>

    )
};

export default SingleBankNumber;