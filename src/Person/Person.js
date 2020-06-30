import React from 'react'
import './Person.css';

const person = (props) => {
    console.log(props.name)
    return (
        <div className="contenedor">
            {props.name !== undefined ?
                <div>
                    <p onClick={props.click}> mi nombre es {props.name} y mi edad es {props.age}</p>
                    <p>{props.children}</p>
                    <input  onChange={props.change} value={props.name} />
                </div>
                :
                null
            }
        </div>
    );
}

export default person;