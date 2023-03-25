import React, {useState} from "react";
import logo from '../../assets/logo.png';
import Links from "../links/Links";
import { Links as data } from "../../data/Links";
import Sheet from "../basic/sheet/Sheet";
import disco from '../../assets/disco.png'


const Navbar = () =>{
    const [navmenu,setNavmenu] = useState(true);
    return(
        <Sheet className="fixed left-1/2 transform -translate-x-1/2 z-10">
        <div className={'flex justify-between items-center'}>
            <img className="max-w-[8rem]" src={logo}></img>
            <div className="flex gap-[3.3125rem]">
            {navmenu ?<Links data={data}></Links>:''}
            <img className="max-w-[36px] animate-spin" alt={'disco-logo'} src={disco} onClick={ () => {setNavmenu(!navmenu)}}></img>
            </div>
        </div>
        </Sheet>
    )
}
export default Navbar