import headStyle from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {
    return (
        <header className={headStyle.header}>
            <div className={headStyle.menuDesktop}>
                <div className={headStyle.logo}>
                    <Image 
                    src="/logo_desplora.webp" 
                    alt="Logo desplora viajes" 
                    width={90} 
                    height={90} />
                </div>
                <nav className={headStyle.menu}>
                    <ul>
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">Destinos</Link></li>
                        <li><Link href="#">Vida en Alemania</Link></li>
                        <li><Link href="#">Nosotros</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={headStyle.menuMobil}>

            </div>
        
        </header>
    );
}