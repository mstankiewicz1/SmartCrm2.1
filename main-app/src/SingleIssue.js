import React from 'react';

const SingleIssue = (props) => {


    const style = {
        color: 'red',
    };


    const { title, category, text, important, active, id } = props.singleCase;

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
                                <td><button className="finishCase" onClick={() => props.change(id)}>Zakończ sprawę</button></td>
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

export default SingleIssue;