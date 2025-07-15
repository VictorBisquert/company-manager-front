import React from 'react';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxCustomHooks";
import { getAllCompanys } from "../../../features/company/companySlice";
import DataTable from '../../DataTables/DataTable';
import { COMPANY_HEADER } from '../../../utils/constants/headers';


const CompanyData = () => {
    const {
        companies = [],
        filteredCompanies = [],
        isLoading,
    } = useAppSelector((state) => state.company);

    const dispatch = useAppDispatch();

  //traemos todas las compañias
  useEffect(() => {
    dispatch(getAllCompanys());
  }, [dispatch, companies.length]);

  const headerTitles = COMPANY_HEADER.map((header) => header.header); //traemos el array con la cabecera de la tabla compañia

  return (
    <section className="space-y-8 rounded bg-white p-4 shadow">
      <h2 className="font-inter-bold text-xl">Información de direcciones</h2>
      <small className="font-inter-semi-bold text-gray-1">
        Estos son los datos encontrados.
      </small>

      <div className="max-h-[50vh] max-w-full overflow-auto">
        <DataTable 
          headers={headerTitles}
          data={filteredCompanies}
          dataType="company"
        />
      </div>
    </section>
  );

};








export default CompanyData;