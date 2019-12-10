import React from 'react';

const SingleSale = (props) => {


    const style = {
        color: 'red',
    };


    const { title, category, text, important, active, id } = props.singleSale;

    if(active) {
        return (
            <div>
                <p>
                    <table>
                        <tbody>
                        <tr>
                            <td><strong style={important ? style : null}>{title} </strong></td>
                            <td><strong style={important ? style : null}>{category}</strong></td>
                            <td><strong style={important ? style : null}>{text}</strong></td>
                            <td><button className="finishContact" onClick={() => props.change(id)}>Zakończ sprzedaz</button></td>
                        </tr>
                        </tbody>
                    </table>
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    <strong>{title} </strong>
                    <strong>{category}</strong>
                </p>
            </div>
        )
    }
};

export default SingleSale;