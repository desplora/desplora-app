

import type { Metadata } from "next";
import destinosStyle from './destinos.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function DestinosLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const continentes = ["Africa", "América", "Asia", "Europa", "Oceania"];
    const paises = "paises";
    const ciudades = "ciudades";
    return (
        <div>
            <nav className={destinosStyle.filtroCont}>
                <div className={destinosStyle.continentes}>
                {continentes.map((continente) => (
                    <Link className={destinosStyle.miniatura} href={continente}>
                        <img alt={`destinos en ${continente}`} key={`icono desplora para ${continente}`} src={`https://desplora.com/medien/iconosDesplora/${continente}.webp`}/> 
                        <p key={`destinos en ${continente}`} >{continente}</p>
                    </Link>
                ))}
                </div>


            </nav>
            {children}
        </div>
    );
}

