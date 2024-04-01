'use client';

interface props { children: React.ReactNode }

import { useAppSelector } from '@/redux/hooks';

export default function DarkLightSeter({children}: props){
   const  modus = useAppSelector((state) => state.memoriaReducer.modus);

    return (
        <div className={`${modus? "dark" : "light"}`}>
            {children}
        </div>
    )
} 