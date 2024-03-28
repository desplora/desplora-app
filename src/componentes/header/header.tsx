//estilos
import headStyle from './header.module.css';

//extenciones
import Image from 'next/image';
import Link from 'next/link';

//icons
import { FaHome } from "react-icons/fa"; //casa
import { TiThMenu } from "react-icons/ti"; //menu hamburguesa




export default function Header() {
    return (
        <header className={headStyle.header}>
            <div className={headStyle.menuDesktop}>

                {/*Logo de desplora*/}
                <Link href="/">
                <div className={headStyle.logo}>
                    <Image 
                    src="/logo_desplora.webp" 
                    alt="Logo desplora viajes" 
                    width={60} 
                    height={60} />
                </div>
                </Link>

                {/*Navegacion con las paginas en el Desktop*/}
                <nav className={headStyle.menu}>
                    <ul>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Home</Link></li>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Destinos</Link></li>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Vida en Alemania</Link></li>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Nosotros</Link></li>
                    </ul>
                </nav>

                {/*Navegacion con las paginas en el movil*/}

                <div className={headStyle.menuMobilIcon}>
                <TiThMenu size={40} /> 
                    </div>

                {/*boton para light- y darkmode*/}
                <div className={headStyle.themeSwitcher}>
                    <div className={headStyle.toggle}>
                    </div>
                </div>

            </div>

            {/*Menu desplegable para dispositivos moviles*/}

            <div className={headStyle.menuMobil}>

            <nav className={headStyle.menu}>
                    <ul>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Home</Link></li>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Destinos</Link></li>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Vida en Alemania</Link></li>
                        <li><Link href="#"><FaHome className={headStyle.icon} /> Nosotros</Link></li>
                    </ul>
                </nav>

            </div>
        
        </header>
    );
}