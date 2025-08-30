import { provinces } from "./data/provinces.js";
import { districts } from "./data/districts.js";

export const getProvinces = (): string[] => provinces;
export const getDistrictsByProvince = (province: string): string[] | null => districts[province] || null;