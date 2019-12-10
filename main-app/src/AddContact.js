import React from 'react';


class AddContact extends React.Component {


    state = {
        title: '',
        category: '',
        text: '',
        important: false
    };

    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    };

    handleClick = () => {

        const {title, category, text, important} = this.state;

        const addContact = this.props.addContact(title, category, text, important);

        if(addContact){
            this.setState({
                title: '',
                category: '',
                text: '',
                important: false
            })
        }
    };


    render(){
        return <div className="formContact">
            <fieldset className="containerIssues">
                <p className="headerAddContact">Dodaj Kontakt</p>
                <input name="title" className="titleContact" type="text" placeholder="Wpisz temat kontaktu" value={this.state.title}
                       onChange={this.handleChange}/>
                <select name="category" typeof="text" className="selectCategoryContact" value={this.state.category}
                        onChange={this.handleChange}>
                    <option>Temat kontaktu</option>
                    <option value="Rachunki Inwestycyjne">Rachunki Inwestycyjne</option>
                    <option value="Umowy cywilno-prawne">Umowy cywilno-prawne</option>
                    <option value="Dywidendy">Dywidendy</option>
                    <option value="Inne">Inne</option>
                </select>
                <textarea name="text" className="contactArea" placeholder="Opisz kontakt" value={this.state.text}
                          onChange={this.handleChange}/>
                <input className="signCheckbox" name="important" type="checkbox" checked={this.state.checked}
                       id="important"
                       onChange={this.handleChange}/>
                <label className="important" htmlFor="important">Priorytet</label>
                <br/>
                <button className="addContactButton" type="submit" onClick={this.handleClick}>Dodaj Kontakt</button>
            </fieldset>
        </div>;
    }
}

export default AddContact;