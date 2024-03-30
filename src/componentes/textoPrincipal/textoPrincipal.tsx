import TP from "../estilos/textoPrincipal.module.css";

/*function Slider({arrayToMap}){
    return (
        <div className={TP.slider} >
            {arrayToMap.map( (item, index) => (
                <img key={index} className={TP.imagen} title={item} loading="lazy" alt={item} src={`https://desplora.com/medien/${item}.webp`} />
            ))}
        </div>
    )

}*/

interface TextoPrincipalProps {
    contenidoPayload: string[];
}

const TextoPrincipal: React.FC<TextoPrincipalProps> = ({ contenidoPayload }) => {
    return (
        <div>
            {
            
            contenidoPayload.map( (item, index) => (

                item.length < 25 && Array.isArray(item) && item[0] != "_" ?
                /*<Slider key={index} arrayToMap={item} />*/  <p>{item}</p>        
                     
                :

                 item[0] == "_" ? <p><strong>{item.substring(1)}</strong></p> :
                 
                 
                 <p>{item}</p>
            ))}
        </div>
    );
}

export default TextoPrincipal;