import React from 'react';

class Notes extends React.Component {

    state = {
        text: '',
    };


    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    };


    handleClick = () => {

        const {text} = this.state;

        if (text.length > 5) {
            const add = this.props.add(text);
            if (add) {
                this.setState({
                    text: '',
                })
            }
        } else {
            alert("Notatka powinna zawierać przynajmniej 5 znaków");
        }
    };

    render() {
        return (
            <div className="notesAndPreferencesUser">
                <div className="PrivateNotesArea">
                    <textarea className="textAreaNotes" placeholder="Wpisz prywatną notatkę" rows="3" cols="25" value={this.state.text} onChange={this.handleText}/>
                    <button className="addPrivateNotesButton" onClick={this.handleClick}>Dodaj notatkę</button>
                </div>
            </div>
        );
    }
}

export default Notes;