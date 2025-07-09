// src/features/company/companyService.ts
import axios from "axios";
import type { Company } from "./companyTypes";

const API_URL_COMPANY = "http://localhost:3000/api";

export const getAllCompanies = async (): Promise<Company[]> => {
  const response = await axios.get(`${API_URL_COMPANY}/company/getAllCompanys`);
  return response.data;
};
