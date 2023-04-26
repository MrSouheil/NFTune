import React, {useState} from "react";
import logo from '../../assets/logo.png';
import Links from "../links/Links";
import { Links as data } from "../../data/Links";
import Sheet from "../basic/sheet/Sheet";
import disco from '../../assets/disco.png'
import Button from "../basic/button/Button";


const Navbar = () =>{
    const [navmenu,setNavmenu] = useState(true);
    return(
        <Sheet className="mx-auto z-10 relative">
        <div className={'flex justify-between items-center'}>
            <img className="max-w-[8rem]" src={logo}></img>
            <div className="flex gap-[3.3125rem] items-center">
            {navmenu ?<Links data={data}></Links>:''}
            <img className="max-w-[36px] animate-spin h-fit" alt={'disco-logo'} src={disco} onClick={ () => {setNavmenu(!navmenu)}}></img>
            <Button onClick={()=>{window.location.href='/profile'}}>My profile</Button>
            </div>
        </div>
        </Sheet>
    )
}
export default Navbar