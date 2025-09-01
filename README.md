# Sri Lanka Locations

**npm package to get and select provinces and districts of Sri Lanka.**

Provides raw data and dropdown-ready JSON for frontend frameworks.

[![npm version](https://badge.fury.io/js/sri-lanka-locations.svg)](https://badge.fury.io/js/sri-lanka-locations)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Installation

```bash
npm install sri-lanka-locations
```

## Features

- ✅ Complete list of all 9 provinces in Sri Lanka
- ✅ All 25 districts mapped to their respective provinces
- ✅ Clean, structured JSON data
- ✅ Ready-to-use for dropdowns and form components
- ✅ TypeScript support
- ✅ Lightweight package
- ✅ No external dependencies

## Usage

### Basic Import

```javascript
const { 
  provinces, 
  districts, 
  getProvinces,
  getDistrictsByProvince,
  provinceOptions,
  getDistrictOptionsByProvince
} = require('sri-lanka-locations');

// ES6 modules
import { 
  provinces, 
  districts, 
  getProvinces,
  getDistrictsByProvince,
  provinceOptions,
  getDistrictOptionsByProvince
} from 'sri-lanka-locations';
```

### Get All Provinces

```javascript
// Raw array of province names
console.log(provinces);
// Output: ["Western", "Central", "Southern", ...]

// Using utility function
console.log(getProvinces());
// Output: ["Western", "Central", "Southern", ...]
```

### Get All Districts

```javascript
console.log(districts);
// Output:
// {
//   "Western": ["Colombo", "Gampaha", "Kalutara"],
//   "Central": ["Kandy", "Matale", "Nuwara Eliya"],
//   "Southern": ["Galle", "Matara", "Hambantota"],
//   ...
// }
```

### Get Districts by Province

```javascript
const westernDistricts = getDistrictsByProvince('Western');
console.log(westernDistricts);
// Output: ["Colombo", "Gampaha", "Kalutara"]

// Returns null for invalid province
const invalidDistricts = getDistrictsByProvince('Invalid');
console.log(invalidDistricts); // Output: null
```

### Dropdown-Ready Data

```javascript
// Get dropdown-ready province options
console.log(provinceOptions);
// Output:
// [
//   { label: "Western", value: "Western" },
//   { label: "Central", value: "Central" },
//   ...
// ]

// Get dropdown-ready district options for a province
const westernDistrictOptions = getDistrictOptionsByProvince('Western');
console.log(westernDistrictOptions);
// Output:
// [
//   { label: "Colombo", value: "Colombo" },
//   { label: "Gampaha", value: "Gampaha" },
//   { label: "Kalutara", value: "Kalutara" }
// ]
```

### React.js Example

```jsx
import React, { useState } from 'react';
import { 
  provinceOptions, 
  getDistrictOptionsByProvince 
} from 'sri-lanka-locations';

function LocationSelector() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [districtOptions, setDistrictOptions] = useState([]);

  const handleProvinceChange = (provinceName) => {
    setSelectedProvince(provinceName);
    setDistrictOptions(getDistrictOptionsByProvince(provinceName));
  };

  return (
    <div>
      <select 
        value={selectedProvince}
        onChange={(e) => handleProvinceChange(e.target.value)}
      >
        <option value="">Select Province</option>
        {provinceOptions.map(province => (
          <option key={province.value} value={province.value}>
            {province.label}
          </option>
        ))}
      </select>

      {districtOptions.length > 0 && (
        <select>
          <option value="">Select District</option>
          {districtOptions.map(district => (
            <option key={district.value} value={district.value}>
              {district.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
```

### Vue.js Example

```vue
<template>
  <div>
    <select v-model="selectedProvince" @change="loadDistricts">
      <option value="">Select Province</option>
      <option 
        v-for="province in provinceOptions" 
        :key="province.value" 
        :value="province.value"
      >
        {{ province.label }}
      </option>
    </select>

    <select v-if="districtOptions.length > 0">
      <option value="">Select District</option>
      <option 
        v-for="district in districtOptions" 
        :key="district.value" 
        :value="district.value"
      >
        {{ district.label }}
      </option>
    </select>
  </div>
</template>

<script>
import { 
  provinceOptions, 
  getDistrictOptionsByProvince 
} from 'sri-lanka-locations';

export default {
  data() {
    return {
      provinceOptions,
      selectedProvince: '',
      districtOptions: []
    };
  },
  methods: {
    loadDistricts() {
      this.districtOptions = getDistrictOptionsByProvince(this.selectedProvince);
    }
  }
};
</script>
```

## Data Structure

### Raw Data

**Provinces Array:**
```typescript
string[] // ["Western", "Central", "Southern", ...]
```

**Districts Object:**
```typescript
Record<string, string[]> // { "Western": ["Colombo", "Gampaha", "Kalutara"], ... }
```

### Dropdown-Ready Data

**Province Options:**
```typescript
{ label: string; value: string }[] 
// [{ label: "Western", value: "Western" }, ...]
```

**District Options (by province):**
```typescript
{ label: string; value: string }[]
// [{ label: "Colombo", value: "Colombo" }, ...]
```

## Complete Lists

### Provinces (9)
1. Western (බස්නාහිර)
2. Central (මධ්‍යම)
3. Southern (දකුණු)
4. Northern (උතුරු)
5. Eastern (නැගෙනහිර)
6. North Western (වයඹ)
7. North Central (උතුරු මැද)
8. Uva (ඌව)
9. Sabaragamuwa (සබරගමුව)

### Districts (25)
- **Western**: Colombo, Gampaha, Kalutara
- **Central**: Kandy, Matale, Nuwara Eliya
- **Southern**: Galle, Matara, Hambantota
- **Northern**: Jaffna, Kilinochchi, Mannar, Mullaitivu, Vavuniya
- **Eastern**: Ampara, Batticaloa, Trincomalee
- **North Western**: Kurunegala, Puttalam
- **North Central**: Anuradhapura, Polonnaruwa
- **Uva**: Badulla, Monaragala
- **Sabaragamuwa**: Ratnapura, Kegalle

## API Reference

### Raw Data Exports

#### `provinces: string[]`
Array of all province names in Sri Lanka.

**Example:**
```javascript
import { provinces } from 'sri-lanka-locations';
console.log(provinces); // ["Western", "Central", ...]
```

#### `districts: Record<string, string[]>`
Object mapping province names to their districts.

**Example:**
```javascript
import { districts } from 'sri-lanka-locations';
console.log(districts["Western"]); // ["Colombo", "Gampaha", "Kalutara"]
```

### Utility Functions

#### `getProvinces(): string[]`
Returns array of all province names.

**Example:**
```javascript
import { getProvinces } from 'sri-lanka-locations';
const allProvinces = getProvinces();
```

#### `getDistrictsByProvince(provinceName: string): string[] | null`
Returns array of district names for the specified province, or null if province not found.

**Parameters:**
- `provinceName` (string): Name of the province

**Returns:** Array of district names or null

**Example:**
```javascript
import { getDistrictsByProvince } from 'sri-lanka-locations';
const districts = getDistrictsByProvince("Western"); // ["Colombo", "Gampaha", "Kalutara"]
const invalid = getDistrictsByProvince("Invalid"); // null
```

### Dropdown-Ready Exports

#### `provinceOptions: { label: string; value: string }[]`
Dropdown-ready array of province options.

**Example:**
```javascript
import { provinceOptions } from 'sri-lanka-locations';
// Use directly in your dropdown components
```

#### `getDistrictOptionsByProvince(provinceName: string): { label: string; value: string }[]`
Returns dropdown-ready district options for the specified province.

**Parameters:**
- `provinceName` (string): Name of the province

**Returns:** Array of dropdown option objects

**Example:**
```javascript
import { getDistrictOptionsByProvince } from 'sri-lanka-locations';
const options = getDistrictOptionsByProvince("Western");
// [{ label: "Colombo", value: "Colombo" }, ...]
```

## TypeScript Support

This package includes TypeScript definitions:

```typescript
// Raw data types
export const provinces: string[];
export const districts: Record<string, string[]>;

// Utility functions
export function getProvinces(): string[];
export function getDistrictsByProvince(provinceName: string): string[] | null;

// Dropdown-ready data types
export const provinceOptions: { label: string; value: string }[];
export function getDistrictOptionsByProvince(
  provinceName: string
): { label: string; value: string }[];
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Chathuranga Niroshana**

## Support

If you find this package helpful, please consider giving it a ⭐️ on GitHub!

## Changelog

### v1.0.0
- Initial release
- Complete provinces and districts data
- Basic utility functions
- TypeScript support