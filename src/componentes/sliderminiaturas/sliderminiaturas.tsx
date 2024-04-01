'use client';

import sliderStyle from './slider.module.css'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Miniatura from '../miniatura/miniatura';
import { guardarCiudad } from '@/redux/features/memoriaSlice';





export default function SliderMiniaturas(){
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.memoriaReducer.destinos)


    return(
        <div className={sliderStyle.slider}>
                {data.map((destino: any) => (
                  <Miniatura onClick={()=> dispatch(guardarCiudad(destino))} key={`viajar a ${destino.titulo}, informacion en desplora`} imagen={destino.imagenPrincipal} titulo={destino.titulo} />
                ))
                  }
                </div>

    )
}