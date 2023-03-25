import React,{useState} from "react";
import Text from "../basic/text/Text";
import { Link } from "react-router-dom";
const Links = (props) =>{
    const [active,setActive]= useState(0)
    const {
        data=''
    }=props;
    
    return(
        <div className="flex gap-[3.3125rem] w-fit">
            {data.map(Link => <a style={{textDecoration:'none'}} key={Link.id} onClick={ () => {setActive(Link.id)}} href={Link.link}><Text className={`${Link.id == active ? 'border-b-4 border-[#2EE09A] text-[#2EE09A]' : 'text-white'}`} type={'button'}>{Link.title}</Text></a>)}
        </div>
    )
}
export default Links