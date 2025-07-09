// src/features/company/companyTypes.ts
export interface CompanyData {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
}

export interface CompanyFilters {
  nombre: string;
  direccion: string;
  telefono: string;
}

export interface CompanyFormValues {
  nombre: string;
  direccion: string;
  telefono: string;
}