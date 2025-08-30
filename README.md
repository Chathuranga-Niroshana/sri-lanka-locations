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
const { provinces, districts, getDistrictsByProvince } = require('sri-lanka-locations');

// ES6 modules
import { provinces, districts, getDistrictsByProvince } from 'sri-lanka-locations';
```

### Get All Provinces

```javascript
console.log(provinces);
// Output:
// [
//   { id: 1, name: 'Western', sinhala: 'බස්නාහිර', tamil: 'மேல் மாகாணம்' },
//   { id: 2, name: 'Central', sinhala: 'මධ්‍යම', tamil: 'மத்திய மாகாணம்' },
//   ...
// ]
```

### Get All Districts

```javascript
console.log(districts);
// Output:
// [
//   { id: 1, name: 'Colombo', province_id: 1, province: 'Western' },
//   { id: 2, name: 'Gampaha', province_id: 1, province: 'Western' },
//   ...
// ]
```

### Get Districts by Province

```javascript
const westernDistricts = getDistrictsByProvince('Western');
console.log(westernDistricts);
// Output:
// [
//   { id: 1, name: 'Colombo', province_id: 1, province: 'Western' },
//   { id: 2, name: 'Gampaha', province_id: 1, province: 'Western' },
//   { id: 3, name: 'Kalutara', province_id: 1, province: 'Western' }
// ]

// You can also use province ID
const centralDistricts = getDistrictsByProvince(2);
```

### React.js Example

```jsx
import React, { useState } from 'react';
import { provinces, getDistrictsByProvince } from 'sri-lanka-locations';

function LocationSelector() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [districts, setDistricts] = useState([]);

  const handleProvinceChange = (provinceId) => {
    setSelectedProvince(provinceId);
    setDistricts(getDistrictsByProvince(provinceId));
  };

  return (
    <div>
      <select onChange={(e) => handleProvinceChange(e.target.value)}>
        <option value="">Select Province</option>
        {provinces.map(province => (
          <option key={province.id} value={province.id}>
            {province.name}
          </option>
        ))}
      </select>

      {districts.length > 0 && (
        <select>
          <option value="">Select District</option>
          {districts.map(district => (
            <option key={district.id} value={district.id}>
              {district.name}
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
      <option v-for="province in provinces" :key="province.id" :value="province.id">
        {{ province.name }}
      </option>
    </select>

    <select v-if="districts.length > 0">
      <option value="">Select District</option>
      <option v-for="district in districts" :key="district.id" :value="district.id">
        {{ district.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { provinces, getDistrictsByProvince } from 'sri-lanka-locations';

export default {
  data() {
    return {
      provinces,
      selectedProvince: '',
      districts: []
    };
  },
  methods: {
    loadDistricts() {
      this.districts = getDistrictsByProvince(this.selectedProvince);
    }
  }
};
</script>
```

## Data Structure

### Provinces

| Field | Type | Description |
|-------|------|-------------|
| `id` | Number | Unique identifier |
| `name` | String | Province name in English |
| `sinhala` | String | Province name in Sinhala |
| `tamil` | String | Province name in Tamil |

### Districts

| Field | Type | Description |
|-------|------|-------------|
| `id` | Number | Unique identifier |
| `name` | String | District name in English |
| `province_id` | Number | Reference to province ID |
| `province` | String | Province name |

## Complete Lists

### Provinces (9)
1. Western
2. Central 
3. Southern 
4. Northern 
5. Eastern 
6. North Western
7. North Central 
8. Uva 
9. Sabaragamuwa

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

### Functions

#### `getDistrictsByProvince(provinceIdOrName)`

Returns an array of districts for the specified province.

**Parameters:**
- `provinceIdOrName` (Number|String): Province ID or province name

**Returns:** Array of district objects

**Example:**
```javascript
getDistrictsByProvince(1); // By ID
getDistrictsByProvince('Western'); // By name
```

## TypeScript Support

This package includes TypeScript definitions:

```typescript
interface Province {
  id: number;
  name: string;
  sinhala: string;
  tamil: string;
}

interface District {
  id: number;
  name: string;
  province_id: number;
  province: string;
}

export const provinces: Province[];
export const districts: District[];
export function getDistrictsByProvince(provinceIdOrName: number | string): District[];
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