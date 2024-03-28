import footerStyle from './footer.module.css'
import Link from 'next/link';
//icons
import { GrInstagram } from "react-icons/gr"; // instagram
import { RiPinterestLine } from "react-icons/ri"; // pinterest




export default function Footer() {
    return ( 
    
        <div style={{ position: "relative"}}>


        <div className={footerStyle.contenedorPalmeras}>
            <img className={footerStyle.palm1} src="/palmera desplora.webp" alt="palmeras" />
            <img className={footerStyle.palm2} src="/palmera desplora.webp" alt="palmeras" />
            <img className={footerStyle.palm3} src="/palmera desplora.webp" alt="palmeras" />
            <img className={footerStyle.palm4} src="/palmera desplora.webp" alt="palmeras" />
            <img className={footerStyle.palm5} src="/palmera desplora.webp" alt="palmeras" />
        </div>


    <footer className={`${footerStyle.footer} fondoAzulOscuro`}>
        <div className={footerStyle.contenido}>
            <div className={footerStyle.box}>
            
            </div>
            <div className={footerStyle.box}>
            <Link href="https://www.instagram.com/desploraviajes/" target='_blank'>
            <GrInstagram size={30} className={`${footerStyle.iconoMedia} colorGrisClaro`} />
            </Link>
            <Link href="https://www.pinterest.de/desploraviajes/" target='_blank' >
            <RiPinterestLine size={35} className={`${footerStyle.iconoMedia} colorGrisClaro`} />
            </Link>
            </div>

        </div>
        <div className={`${footerStyle.creditos} colorGrisClaro`} >
            <p>Web Design: Diego Calle</p>
            <p>Redacción: Aida P.M.</p>
            <br/>
            <p>Desplora 2024</p>
            <p>© Todos los derechos reservados</p>
            <br/>
            <img  src="/logo desplora monocromo.png" alt="logo desplora monocromo" />
        </div>


    </footer>
    </div>
    )
}
    