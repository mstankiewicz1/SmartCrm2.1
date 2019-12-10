import React from 'react';


class AddSale extends React.Component {


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

        const addSale = this.props.addSale(title, category, text, important);

        if(addSale){
            this.setState({
                title: '',
                category: '',
                text: '',
                important: false
            })
        }
    };


    render(){
        return <div className="formSale">
            <fieldset className="containerIssues">
                <p className="headerAddSale">Dodaj Sprzedaż</p>
                <input name="title" className="titleSale" type="text" placeholder="Wpisz nazwę sprzedanego produktu" value={this.state.title}
                       onChange={this.handleChange}/>
                <select name="category" typeof="text" className="selectCategorySale" value={this.state.category}
                        onChange={this.handleChange}>
                    <option>Typ produktu</option>
                    <option value="Akcje">Akcje</option>
                    <option value="Obligacje">Obligacje</option>
                    <option value="Kontrakty terminowe">Kontrakty terminowe</option>
                    <option value="Opcje">Opcje</option>
                </select>
                <textarea name="text" className="saleArea" placeholder="Opisz sprzedaż" value={this.state.text}
                          onChange={this.handleChange}/>
                <input className="signCheckbox" name="important" type="checkbox" checked={this.state.checked}
                       id="important"
                       onChange={this.handleChange}/>
                <label className="important" htmlFor="important">Priorytet</label>
                <br/>
                <button className="addSaleButton" type="submit" onClick={this.handleClick}>Dodaj Sprzedaż</button>
            </fieldset>
        </div>;
    }
}

export default AddSale;