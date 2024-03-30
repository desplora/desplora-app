import Link from "next/link";
import paisStyle from './paises.module.css';
import Image from 'next/image'

export default async function Paises({ params } : { params: { continente: string }}) {

    const data = await fetch('https://diegobarakus.github.io/apiAlimantador/destinosLista.json');
    const destinos = await data.json();

    const continenteLegible = decodeURIComponent(params.continente);

        let nuevaLista = destinos.filter((i: any) => i.continente === continenteLegible)
        let arrayConRepetidos: string[] = [];

        nuevaLista.filter((i: any) =>{  arrayConRepetidos.push(i.pais)} )
        
        const arrayUnico = arrayConRepetidos.reduce((unicos: any, objeto: any) => {

        const existe = unicos.some((item: any) => JSON.stringify(item) === JSON.stringify(objeto));
        if (!existe) {
        unicos.push(objeto);
        }
        return unicos;
        }, []);    
    return (
        <div className={paisStyle.contenedor}>
            {arrayUnico.map((pais: any) => (
                <Link key={pais + " destinos"} href={pais}>
                    <div className={paisStyle.miniatura}>
                        <img src={`https://desplora.com/medien/iconosDesplora/${pais}.webp`}/>
                        <p>{pais}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}