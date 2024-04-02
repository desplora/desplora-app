'use client'

import DestinoPortada from '../../../componentes/destinoportada/destinoportada';
import  { useSelector } from 'react-redux';
import TextoPrincipal from '../../../componentes/textoPrincipal/textoPrincipal';
import GaleriaFotos from '../../../componentes/galeriaFotosSlider/galeriaFotos';

export default function Page({ params} : any) {

    const paramURL = decodeURIComponent(params.ciudad).toLowerCase()

    const destinos = useSelector((state: any) => state.memoriaReducer.destinos); 
    const ciudad = destinos.filter((item: any) => item.titulo.trim().toLowerCase() === paramURL);
    const dame = ciudad[0]
        console.log(ciudad)
    return (
        <div>
            {destinos.length > 1?
            <>
            <DestinoPortada tituloCiudad={dame.titulo} imagen={dame.imagenPrincipal} region={dame.region} geozona={dame.GeoZona} />
            <GaleriaFotos contenidoPayload={dame.galeria} />
            <TextoPrincipal contenidoPayload={dame.texto} />
            </>
             
             
             
             
             
             
             : <h1>no hay datos</h1>}
        </div>
    )
}