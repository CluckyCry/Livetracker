const routes = [
  {
    id: 1,
    start: "Model Colony",
    end: "Dockyard",
    distance_km: 28,
    start_location: {
      latitude: 24.9069,
      longitude: 67.1386,
    },
    end_location: {
      latitude: 24.8081,
      longitude: 66.9893,
    },
  },
  {
    id: 2,
    start: "Power House",
    end: "Indus Hospital",
    distance_km: 30,
    start_location: {
      latitude: 24.9565,
      longitude: 67.0649,
    },
    end_location: {
      latitude: 24.8554,
      longitude: 67.2473,
    },
  },
  {
    id: 3,
    start: "Power House",
    end: "Shaan Chowrangi",
    distance_km: 31,
    start_location: {
      latitude: 24.9565,
      longitude: 67.0649,
    },
    end_location: {
      latitude: 24.9223,
      longitude: 67.0925,
    },
  },
  {
    id: 4,
    start: "Power House",
    end: "Tower",
    distance_km: 21,
    start_location: {
      latitude: 24.9565,
      longitude: 67.0649,
    },
    end_location: {
      latitude: 24.85,
      longitude: 67.0113,
    },
  },
  {
    id: 9,
    start: "Gulshan e Hadeed",
    end: "Tower",
    distance_km: 42,
    start_location: {
      latitude: 24.7892,
      longitude: 67.2066,
    },
    end_location: {
      latitude: 24.85,
      longitude: 67.0113,
    },
  },
  {
    id: 10,
    start: "Numaish Chowrangi",
    end: "Ibrahim Hyderi",
    distance_km: 28,
    start_location: {
      latitude: 24.8738,
      longitude: 67.0365,
    },
    end_location: {
      latitude: 24.8012,
      longitude: 67.1745,
    },
  },
  {
    id: 11,
    start: "Shireen Jinnah Colony",
    end: "Miran Nakka Lyari",
    distance_km: 19,
    start_location: {
      latitude: 24.8141,
      longitude: 67.0331,
    },
    end_location: {
      latitude: 24.8724,
      longitude: 67.0101,
    },
  },
  {
    id: 12,
    start: "Khokrapar",
    end: "Lucky Star Saddar",
    distance_km: 32,
    start_location: {
      latitude: 24.8992,
      longitude: 67.1838,
    },
    end_location: {
      latitude: 24.8551,
      longitude: 67.0342,
    },
  },
];

export function getRoutes() {
  return routes;
}

/*
export function initializeBus(busId, startCoords, stopCoords){
    busData[busId] = {
        startingPoint: startCoords,
        endingPoint: stopCoords,
        currentLocation: startCoords
    }
}

export function updateBusData(busId, updatedProperty) {
  const bData = busData[busId]; // Accessing the data of the specific bus.
  busData[busId] = { ...bData, updatedProperty };
}
  */
