import { provinces } from "./provinces.js";
import { districts } from "./districts.js";

export const provinceOptions = provinces.map(p => ({
    label: p,
    value: p
}));

export const districtOptions: Record<string, { label: string; value: string }[]> =
    Object.entries(districts).reduce((acc, [province, districtList]) => {
        acc[province] = districtList.map(d => ({ label: d, value: d }));
        return acc
    }, {} as Record<string, { label: string; value: string }[]>);

export const getDistrictOptionsByProvince = (province: string) => {
    districtOptions[province] || []
}