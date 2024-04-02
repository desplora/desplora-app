import { title } from 'process'
import galFotosSytle from './galeriafotos.module.css'


export default function GaleriaFotos({ contenidoPayload } : { contenidoPayload: any }) {
    return (
        <div className={galFotosSytle.contenedor}>
            {contenidoPayload.map((item: any, index: number) => {
                   return <img
                    alt={`viaja y descubre ${item}`} 
                    src={`https://desplora.com/medien/${item}.webp`}
                    title={`${item}`}
                    key={`viaje de desplora imagen ${item}`}
                    />
                    
                }
            )}
        </div>
    )
}