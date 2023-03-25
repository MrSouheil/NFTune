import React from "react";
import styles from './Text.module.css';
const Text = (props) =>{
    const{
        type,
        className,
        margin,
        padding,
        color
    } =props
    return(
        <div className={`${className} ${styles[type]} ${margin} ${padding} ${color}`} > 
            {props.children}
        </div>
    )
}
export default Text;