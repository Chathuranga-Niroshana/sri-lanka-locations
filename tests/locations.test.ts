import {
    getProvinces,
    getDistrictOptionsByProvince,
    provinceOptions,
    districtOptions,
    getDistrictsByProvince
} from "../src/index.js";

describe("Sri Lanka Location Package (ESM)", () => {
    it("returns all provinces", () => {
        expect(getProvinces()).toContain("Central");
        expect(getProvinces().length).toBe(9);
    });

    it("returns districts for Central", () => {
        expect(getDistrictsByProvince("Central")).toEqual([
            "Kandy",
            "Matale",
            "Nuwara Eliya"
        ]);
    });

    it("returns null for invalid province", () => {
        expect(getDistrictsByProvince("Invalid")).toBeNull();
    });

    it("provides dropdown-ready provinces", () => {
        expect(provinceOptions[1]).toEqual({ label: "Central", value: "Central" })
    });

    it("provides dropdown-ready districts", () => {
        expect(getDistrictOptionsByProvince("Central")).toEqual([
            { label: "Kandy", value: "Kandy" },
            { label: "Matale", value: "Matale" },
            { label: "Nuwara Eliya", value: "Nuwara Eliya" },
        ])
    })



})