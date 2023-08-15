import React, { useState } from "react";
import logo from '../../assets/logo.png';
import Links from "../links/Links";
import { Links as data } from "../../data/Links";
import Sheet from "../basic/sheet/Sheet";
import disco from '../../assets/disco.png'
import Button from "../basic/button/Button";

import { Dropdown } from "react-bootstrap";
import { Link as CustomLink } from "react-router-dom";


const Navbar = () => {
    const [navmenu, setNavmenu] = useState(true);
    return (
        <Sheet className="mx-auto z-10 relative mb-[30px] md:mb-20">
            <div className={'flex justify-between items-center'}>
                <img className="max-w-[4rem] md:max-w-[8rem]" src={logo}></img>
                <div className="flex gap-[3.3125rem] items-center max-md:hidden">
                    {navmenu ? <Links data={data}></Links> : ''}
                    <img className="max-w-[36px] animate-spin h-fit" alt={'disco-logo'} src={disco} onClick={() => { setNavmenu(!navmenu) }}></img>
                    <CustomLink to='/profile'><Button >My profile</Button></CustomLink>
                </div>

                <div className="md:hidden">
                    <Dropdown data-bs-theme="light">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                            
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {data.map(Links => {
                            return ( <Dropdown.Item href={Links.link} >
                                {Links.title}
                                </Dropdown.Item>)
                        } )}
                        <Dropdown.Divider />
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>


            </div>
        </Sheet>
    )
}
export default Navbar