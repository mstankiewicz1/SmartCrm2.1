import React from 'react';


class AddIssues extends React.Component {


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

        const addCase = this.props.addCase(title, category, text, important);

        if(addCase){
            this.setState({
                title: '',
                category: '',
                text: '',
                important: false
            })
        }
    };


    render(){
        return <div className="formIssues">
                        <fieldset className="containerIssues">
                            <p className="headerAddIssues">Dodaj Sprawę</p>
                            <input name="title" className="titleIssues" type="text" placeholder="Wpisz tytuł sprawy" value={this.state.title}
                                   onChange={this.handleChange}/>
                            <select name="category" typeof="text" className="selectCategoryIssues" value={this.state.category}
                                    onChange={this.handleChange}>
                                <option>Rodzaj Sprawy</option>
                                <option value="Rachunki Inwestycyjne">Rachunki Inwestycyjne</option>
                                <option value="Umowy cywilno-prawne">Umowy cywilno-prawne</option>
                                <option value="Dywidendy">Dywidendy</option>
                                <option value="Inne">Inne</option>
                            </select>
                            <textarea name="text" className="caseArea" placeholder="Opisz sprawę" value={this.state.text}
                                   onChange={this.handleChange}/>
                            <input className="signCheckbox" name="important" type="checkbox" checked={this.state.checked}
                                   id="important"
                                   onChange={this.handleChange}/>
                            <label className="important" htmlFor="important">Priorytet</label>
                            <br/>
                            <button className="addIssueButton" type="submit" onClick={this.handleClick}>Dodaj Sprawę</button>
                        </fieldset>
                </div>;
    }
}

export default AddIssues;