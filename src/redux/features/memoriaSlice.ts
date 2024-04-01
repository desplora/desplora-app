import { createSlice } from "@reduxjs/toolkit";
import { count } from "console";

export const memoriaSlice = createSlice({
    name: "memoria",
    initialState: {
        paginas: [],
        destinos: [],
        allCiudades: [],
        currentContinente: "",
        currentPais: "",
        currentCiudad: "",
        modus: false,
        test: "funciona"
    },
    reducers: {

        changeModus: (state, action) => {
            state.modus = action.payload;
        },
        guardarDestinos: (state, action) => {
            state.destinos = action.payload; 
        },
        guardarPaginas: (state, action) => {
            state.paginas = action.payload; 
        },
        guardarContinente: (state, action) => {
            state.currentContinente = action.payload; 
        },
        guardarPais: (state, action) => {
            state.currentPais = action.payload; 
        },
        guardarCiudad: (state, action) => {
            state.currentCiudad = action.payload; 
        },
        guardarAllCiudades: (state, action) => {
            state.allCiudades = action.payload;
        }
    },
    });


   export const { 
    changeModus, 
    guardarDestinos, 
    guardarPaginas, 
    guardarCiudad,
    guardarPais,
    guardarContinente,
    guardarAllCiudades
} = memoriaSlice.actions;
   export default memoriaSlice.reducer