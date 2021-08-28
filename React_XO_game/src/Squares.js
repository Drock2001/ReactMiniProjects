import React from "react";

const Squares = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={classes + (props.state === "X" ? ` fc-color1` : ` fc-color2`)}
            onClick={() => props.onClick(props.index)}>
           {props.state}
        </span>
    )
}
export default Squares