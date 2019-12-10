import React from 'react';
import SingleBankNumber from './SingleBankNumber';

const BankNumbersList = (props) => {


    const number = props.listNumbers.map( num =>
        <SingleBankNumber
            key={num.id}
            num={num}
        />
    );

    return (
        <div>
            <div className="thirdActivityContainer"></div>
            <div className="HistoryBankNumbers">
                <div className="historyBankNumbersDetail">
                    <h4>Lista rachunków</h4>
                    {number.slice(0,3).length > 0 ? number.slice(0,3) : "brak aktywnych rachunków"}
                </div>
            </div>
        </div>
    )
};

export default BankNumbersList;