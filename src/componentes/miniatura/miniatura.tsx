import Link from 'next/link';
import miniaturaStyle from './miniatura.module.css';

export default function Miniatura({imagen, titulo}: any){
    return(
            <Link href="/destinos/[id]" as={`/destinos/${titulo}`}>
            <div className={miniaturaStyle.miniaturaDesplora} >
                <img className={miniaturaStyle.coverMiniatura} src={`https://desplora.com/medien/${imagen}.webp`}/>
                <div className={miniaturaStyle.blende}></div>
                <p>{titulo}</p>
                
            </div>
            </Link>
    )
    
}