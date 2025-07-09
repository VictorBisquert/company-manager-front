import React from 'react';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxCustomHooks";
import { getAllCompanys } from "../../../features/company/companySlice";


const CompanyData = () => {
    const {
        companies = [],
        filteredCompanies = [],
        isLoading,
    } = useAppSelector((state) => state.company);

    const dispatch = useAppDispatch();

    useEffect(() => {
    dispatch(getAllCompanys());
  }, [dispatch, companies.length]);

  console.log("Companies:", companies);
  console.log("Filtered Companies:", filteredCompanies);

  return (
    <div>
      <h2>Company Data</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && companies.length === 0 && <p>No companies found.</p>}
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.nombre} - {company.direccion} - {company.telefono}
          </li>
        ))}
      </ul>
    </div>
  );

};








export default CompanyData;