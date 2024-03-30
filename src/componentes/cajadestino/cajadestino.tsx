'use client';


import cajaDestinoStyle from './cajadestino.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Destinos({Input} : {Input: string}){


    const router = useRouter();
    console.log(router)

    return (
        <Link key={Input + " destinos"} href={Input}>
                    <div className={cajaDestinoStyle.miniatura}>
                        <img src={`https://desplora.com/medien/iconosDesplora/${Input}.webp`}/>
                        <p>{Input}</p>
                    </div>
        </Link>
    );
}