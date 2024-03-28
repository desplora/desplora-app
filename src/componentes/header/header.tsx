'use client';

//estilos
import headStyle from './header.module.css';

//extenciones
import Link from 'next/link';
import { useState } from 'react';

//icons
import { FaHome } from "react-icons/fa"; //casa
import { TiThMenu } from "react-icons/ti"; //menu hamburguesa
import { GiPretzel } from "react-icons/gi"; // Brezel
import { BiWorld } from "react-icons/bi"; // mundo
import { IoHeart } from "react-icons/io5"; // corazon
import { IoMdSunny } from "react-icons/io"; // sol
import { FaMoon } from "react-icons/fa"; // luna

let dark = true



export default function Header() {

    const [navOpen, setNavOpen] = useState(false);

    const movilNavHandler = () => {
        const navMobilID = document.getElementById('navMobilID');
        if (!navOpen) {
            navMobilID.style.transform = 'translateY(0px)';
        } else {
            navMobilID.style.transform = 'translateY(-500px)';
        }
        setNavOpen(!navOpen);
    };

    return (
        <header className={headStyle.header}>
            <div className={`${headStyle.menuDesktop} fondoAzulOscuro`}>

                {/*Logo de desplora*/}
                <Link className={headStyle.logo} href="/">
                    <img
                    src="/logo_desplora.webp" 
                    alt="Logo desplora viajes" />
                </Link>

                {/*Navegacion con las paginas en el Desktop*/}
                <nav className={`${headStyle.menuDesktopNav} colorGrisClaro`}>
                    <ul>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Home</Link></li>
                        <li><Link href="#"><BiWorld className={headStyle.icon} /> Destinos</Link></li>
                        <li><Link href="#"><GiPretzel className={headStyle.icon} /> Vida en Alemania</Link></li>
                        <li><Link href="#"><IoHeart className={headStyle.icon} /> Nosotros</Link></li>
                    </ul>
                </nav>

                {/*Navegacion con las paginas en el movil*/}

                <div className={`${headStyle.menuMobilIcon} colorGrisClaro`}>
                <TiThMenu onClick={movilNavHandler}  size={40} /> 
                    </div>

                {/*boton para light- y darkmode*/}
                <div className={headStyle.themeSwitcher}>
                    <div className={headStyle.toggle}>

                        {!dark?
                    <IoMdSunny className={`${headStyle.toggleIcon} colorAmarillo`} /> :
                    <FaMoon className={`${headStyle.toggleIcon} colorGrisClaro`}/>}

                    </div>
                </div>

            </div>

            {/*Menu desplegable para dispositivos moviles*/}

            <div id='navMobilID' className={headStyle.menuMobil}>

            <nav className={headStyle.menuMovilNav}>
                    <ul>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Home</Link></li>
                        <li><Link href="#"><BiWorld className={headStyle.icon} /> Destinos</Link></li>
                        <li><Link href="#"><GiPretzel className={headStyle.icon} /> Vida en Alemania</Link></li>
                        <li><Link href="#"><IoHeart className={headStyle.icon} /> Nosotros</Link></li>
                    </ul>
                </nav>

            </div>
        
        </header>
    );
}