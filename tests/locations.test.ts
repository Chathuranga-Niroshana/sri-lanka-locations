import { describe, it, expect } from 'vitest';
import {
    getProvinces,
    getDistrictOptionsByProvince,
    provinceOptions,
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
        expect(getDistrictOptionsByProvince("Western")).toEqual([
            { label: "Colombo", value: "Colombo" },
            { label: "Gampaha", value: "Gampaha" },
            { label: "Kalutara", value: "Kalutara" }
        ]);
    })



})