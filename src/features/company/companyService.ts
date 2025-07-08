// src/features/company/companyService.ts
import axiosClient from "../../app/api/axiosClient";
import type { Company } from "./companyTypes";

const API_URL_COMPANY = "http://localhost:3000/api";

export const getAllCompanies = async (): Promise<Company[]> => {
  const response = await axiosClient.get(`${API_URL_COMPANY}/company/getAllCompanys`);
  return response.data;
};
