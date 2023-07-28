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
            {data.map(Links => <Link style={{textDecoration:'none'}} key={Links.id} onClick={ () => {setActive(Links.id)}} to={Links.link}><Text className={`${Links.id == active ? 'border-b-4 border-[#2EE09A] text-[#2EE09A]' : 'text-white'}`} type={'button'}>{Links.title}</Text></Link>)}
        </div>
    )
}
export default Links