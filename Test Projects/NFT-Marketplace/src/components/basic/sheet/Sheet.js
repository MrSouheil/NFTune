import React from "react";
const Sheet = (props) =>{
    const{
        className=''
    }=props
    return(
        <div className={`w-10/12 mx-auto ${className}`}>
            {props.children}
        </div>
    )
}
export default Sheet;