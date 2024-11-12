import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  selectedChain: {
    "chain_id": "1728998091342",
    "name": "NYC-23",
    "latitude": 36.1699,
    "longitude": -115.1398,
    "region": "Manhattan",
    "MIAS": [
      {
        "uniqueID": "a1b2c3d4-5678-9abc-def1-234567890abc",
        "name": "Museo",
        "status": "Active",
        "tenantPartner": "CBS",
        "tenancyStartDate": "September 02, 2024",
        "version": "v 1.2.2",
        "description": "Unique space for artists, cultural enthusiasts, and the general public to connect and share in the rich tapestry of local heritage and creativity.",
        "activeUsers": 4610548,
        "deploymentDate": "November 28, 2015",
        "revenue": {
          "Daily": "$450",
          "Monthly": "$11,000",
          "Weekly": "$2,800",
          "Quarterly": "$32,000",
          "Yearly": "$128,000"
        }
      },
      {
        "uniqueID": "a123e456-7f89-0123-4567-89abcdef1234",
        "name": "Izak",
        "status": "Active",
        "tenantPartner": "CBS",
        "tenancyStartDate": "September 02, 2024",
        "version": "v 1.2.2",
        "description": "Unique space for artists, cultural enthusiasts, and the general public to connect and share in the rich tapestry of local heritage and creativity.",
        "activeUsers": 4610548,
        "deploymentDate": "November 28, 2015",
        "revenue": {
          "daily": "$450",
          "monthly": "$11,000",
          "weekly": "$2,800",
          "quarterly": "$32,000",
          "yearly": "$128,000"
        }
      },
      {
        "uniqueID": "b234f567-8e90-1234-5678-90abcdef2345",
        "name": "Spectraguard",
        "status": "Active",
        "tenantPartner": "CBS",
        "tenancyStartDate": "October 12, 2023",
        "version": "v 2.1.4",
        "description": "Advanced security platform for ensuring protection of cultural and creative assets.",
        "activeUsers": 3200541,
        "deploymentDate": "March 15, 2016",
        "revenue": {
          "daily": "$600",
          "monthly": "$15,500",
          "weekly": "$4,000",
          "quarterly": "$48,000",
          "yearly": "$180,000"
        }
      }
    ],
    "Towers": [
      {
        "towerName": "LA-45",
        "uniqueID": "LA45-002",
        "owner": "CBS",
        "tenancyStartDate": "2021-04-10",
        "signalStrength": "-70 dBm",
        "signalQuality": "Very Good",
        "location": {
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        "antennaType": "Omnidirectional",
        "elevation": "250 meters",
        "power": "35 kW",
        "callSign": "KLA-45",
        "coverageArea": "35 miles",
        "broadcastFrequency": "VHF Band",
        "city": "Los Angeles",
        "dma": "Los Angeles",
        "population": "10 million",
        "frequency": "VHF"
      }
    ]
  }
};

export const chainSlice = createSlice({
  name: 'chains',
  initialState,
  reducers: {
    handleChain: (state, action) => {
      state.selectedChain = action.payload;
    },
  },
});

export const { handleChain } = chainSlice.actions;


export default chainSlice.reducer;
