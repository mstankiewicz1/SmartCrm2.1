import React from 'react';


const Search = (props) => {


    return (
        <div className="mainContainer">
            <div className="crmName">
                <p>CRM</p>
            </div>
            <div className="searchContainer">
                   <input  className="search" type="search" maxLength="11" placeholder="Wpisz numer pesel" onChange={props.change}/>
            </div>
            <div className="logSection">
                <p>Logowanie</p>
            </div>
        </div>
    )
};


export default Search;