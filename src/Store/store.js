import { configureStore } from "@reduxjs/toolkit";
import Contuerreduer from "../lib/Contuer";

export const store  = configureStore({
    reducer :{
        counter:Contuerreduer
    }
})