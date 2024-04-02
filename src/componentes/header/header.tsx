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
import { IoClose } from "react-icons/io5"; // cerrar
import { WiStars } from "react-icons/wi"; // estrellas
import { FaCloud } from "react-icons/fa"; // nube



import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeModus, guardarDestinos, guardarPaginas } from '@/redux/features/memoriaSlice';

//API Destinos
import { useGetDestinosQuery, useGetPagesQuery, useGetArticulosQuery } from '@/redux/services/desploraApi';
import { useCookies } from 'react-cookie';




export default function Header() {

    const modus = useAppSelector((state) => state.memoriaReducer.modus);

    //llamar Apis de paginas y destinos
    const dispatch = useAppDispatch();

    let { data, error, isLoading, isFetching } = useGetDestinosQuery(null);
    if(data){dispatch(guardarDestinos(data))}


    //Dark mode
    
    const handelModus = () => {
        dispatch(changeModus(!modus))  
    }

    //funciones del header
    const [navOpen, setNavOpen] = useState(false);
    const movilNavHandler = () => {
        setNavOpen(prevNavOpen => !prevNavOpen);
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
                        <li><Link href="/"><FaHome className={headStyle.icon} /> Home</Link></li>
                        <li><Link href="destinos"><BiWorld className={headStyle.icon} /> Destinos</Link></li>
                        <li><Link href="alemania"><GiPretzel className={headStyle.icon} /> Vida en Alemania</Link></li>
                        <li><Link href="nosotros"><IoHeart className={headStyle.icon} /> Nosotros</Link></li>
                    </ul>
                </nav>

                {/*Navegacion con las paginas en el movil*/}

                <div className={`${headStyle.menuMobilIcon} colorGrisClaro`}>
                    {navOpen ?
                    <IoClose onClick={movilNavHandler}  size={40} /> :
                    <TiThMenu onClick={movilNavHandler}  size={40} /> }
                    </div>

                {/*boton para light- y darkmode*/}

                <div onClick={handelModus} className={!modus?  headStyle.themeSwitcherDark : headStyle.themeSwitcherLight}>


                    <div className={headStyle.toggle}>

                        {!modus? 
                        <FaMoon className={`${headStyle.toggleIcon} `}/> :
                        <IoMdSunny className={`${headStyle.toggleIcon} `} /> 
                    }

                    </div>

                    {!modus?    <WiStars size={25} className={headStyle.estrella}/> : <FaCloud size={20} className={headStyle.nube}/> }


                </div>

            </div>

            {/*Menu desplegable para dispositivos moviles*/}

            <div id='navMobilID' style={{ transform: navOpen ? 'translateY(0px)' : 'translateY(-500px)' }} className={`${headStyle.menuMobil} colorGrisClaro`}>

            <nav className={headStyle.menuMovilNav}>
                    <ul>
                        <li><Link onClick={movilNavHandler} href="/"><FaHome className={headStyle.icon} /> Home</Link></li>
                        <li><Link onClick={movilNavHandler} href="destinos"><BiWorld className={headStyle.icon} /> Destinos</Link></li>
                        <li><Link onClick={movilNavHandler} href="alemania"><GiPretzel className={headStyle.icon} /> Vida en Alemania</Link></li>
                        <li><Link onClick={movilNavHandler} href="nosotros"><IoHeart className={headStyle.icon} /> Nosotros</Link></li>
                    </ul>
                </nav>

            </div>
        
        </header>
    );
}