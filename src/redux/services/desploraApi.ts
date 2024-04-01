import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { create } from 'domain';
import { use } from 'react';

// Define a service using a base URL and expected endpoints

type destinos = {
    id: number;
    titulo: string;
}




export const destinosApi = createApi({
    reducerPath: 'desploraAPI',
    baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://diegobarakus.github.io/apiAlimantador/'     
    }),

    endpoints: (builder) => ({
        getDestinos: builder.query<destinos[], null>({
            query: () => 'destinosLista.json',
        }),
        getPages: builder.query<destinos[], null>({
            query: () => 'Pages.json',
        }),
        getArticulos: builder.query<destinos[], null>({
            query: () => 'vidaEnAlemania.json',
        }),

    })

})

export const {useGetDestinosQuery, useGetArticulosQuery, useGetPagesQuery} = destinosApi; 