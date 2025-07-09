import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CompanyFilters, CompanyData } from "./companyTypes";
import companyService from "./companyService";

// NOTE: Para el estado inicial del slice
export interface CompanyState {
    companies: CompanyData[];
    filteredCompanies: CompanyData[];
    filters: CompanyFilters;
    isLoading: boolean;
    error: boolean;
}

const initialState: CompanyState = {
    companies: [],
    filteredCompanies: [],
    filters: {
        nombre: "",
        direccion: "",
        telefono: "",
    },
    isLoading: false,
    error: false,
};

//aqui no me deja dentro de async si no pongo ningun parametro, hay que poner uno aun que sea _ que es para que no espere parametro
export const getAllCompanys = createAsyncThunk(
    "company/getAllCompanys",
    async (_, thunkAPI) => {
      try {
        return await companyService.getAllCompanies();
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue('Failed to fetch companies');
      }
    },
  );
  

/*
Aqui si que me deja dentro de async el rejectWithValue porque recibo un parametro, en este caso id
export const getCompanyById = createAsyncThunk(
    "company/getCompanyById",
    async (
        { id } : { id: string },
        { rejectWithValue },
    ) => {
        try{
            return await companyService.getCompanyById(id);
        } catch (error: any) {
          console.error(error);   
          return rejectWithValue(error.response?.data || 'Failed to fetch companies');
        }
    },
);*/


export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setCompanyFilters (state, action) {
            const newFilters = action.payload;
            state.filters = newFilters;

            state.filteredCompanies = state.companies.filter((company: CompanyData) => {
                const nombreMatch = newFilters.name === "" || company.nombre === newFilters.nombre;
            
                const direccionMatch = newFilters.direccion === "" || company.direccion.toLowerCase().includes(newFilters.direccion.toLowerCase());
            
                const telefonoMatch = newFilters.telefono === "" || company.telefono === newFilters.telefono;
                return nombreMatch && direccionMatch && telefonoMatch;
            
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCompanys.pending, (state) => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(getAllCompanys.fulfilled, (state, action) => {
                state.companies = action.payload;
                state.filteredCompanies = action.payload;
                state.error = false;
                state.isLoading = false;
            })
            .addCase(getAllCompanys.rejected, (state) => {
                state.error = true;
                state.isLoading = false;
            });
    },
});

export const { setCompanyFilters } = companySlice.actions;

export default companySlice.reducer;


