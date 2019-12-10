import React from 'react';

class AddBankNumber extends React.Component {

    state = {
        number: '',
    };


    handleNumber = (e) => {

        const { value, maxLength } = e.target;
        const number = value.slice(0, maxLength);

        this.setState({
            number,
        })
    };


    handleClick = () => {

        const {number} = this.state;

        if (number.length === 26) {
            const add = this.props.addNumber(number);
            if (add) {
                this.setState({
                    number: '',
                })
            }
        } else {
            alert("Numer rachunku powinien mieć 26 cyfr");
        }
    };


    render() {
        return (
                <div className="notesAndPreferencesUser">
                    <div className="privateAreaBankNumber">
                        <input className="textAreaBankNumber" type="number" maxLength="26" placeholder="Wpisz numer rachunku" value={this.state.number}
                               onChange={this.handleNumber}/>
                        <button className="addBankNumberButton" onClick={this.handleClick}>Dodaj numer rachunku</button>
                    </div>
                </div>
        );
    }
}

export default AddBankNumber;