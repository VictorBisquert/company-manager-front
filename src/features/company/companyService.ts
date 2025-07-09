// src/features/company/companyService.ts
import axios from "axios";
import type { CompanyData } from "./companyTypes";
import { API_URL } from "../../utils/constants/api";

const COMPANY_API_URL = `${API_URL}/api/company`;

export const getAllCompanies = async (): Promise<CompanyData[]> => {
  const response = await axios.get(`${COMPANY_API_URL}/getAllCompanys`);
  return response.data;
};



const companyService = {
  getAllCompanies,
};

export default companyService;