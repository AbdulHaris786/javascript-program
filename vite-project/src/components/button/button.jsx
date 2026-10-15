import React from "react"
const Button = (props) => {
    return (
        <button className="greet" onClick={props.click}>
            {props.name}
        </button>
    )
}
export default Button