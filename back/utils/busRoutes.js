const EARTH_RADIUS = 6371e3; // Earth radius in meters
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

function generateWaypoints(start, end, numWaypoints) {
  const [lat1, lon1] = start.map((coord) => (coord * Math.PI) / 180); // Convert to radians
  const [lat2, lon2] = end.map((coord) => (coord * Math.PI) / 180);

  // Calculate the angular distance between the two points
  const dLon = lon2 - lon1;
  const dLat = lat2 - lat1;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const angularDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Total distance in meters
  const totalDistance = angularDistance * EARTH_RADIUS;

  // Generate waypoints at equal intervals
  const waypoints = [];
  for (let i = 0; i <= numWaypoints; i++) {
    const fraction = i / numWaypoints; // Fraction of the distance
    const A =
      Math.sin((1 - fraction) * angularDistance) / Math.sin(angularDistance);
    const B = Math.sin(fraction * angularDistance) / Math.sin(angularDistance);

    const x =
      A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
    const y =
      A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
    const z = A * Math.sin(lat1) + B * Math.sin(lat2);

    const waypointLat =
      Math.atan2(z, Math.sqrt(x ** 2 + y ** 2)) * (180 / Math.PI);
    const waypointLon = Math.atan2(y, x) * (180 / Math.PI);

    waypoints.push([waypointLat, waypointLon]);
  }

  return waypoints;
}

export function getRoutes() {
  routes.forEach((route, index) => {
    const startLocation = route.start_location;
    const end_location = route.end_location;

    const waypoints = generateWaypoints(
      [startLocation.latitude, startLocation.longitude],
      [end_location.latitude, end_location.longitude],
      10
    );
    routes[index] = { ...routes[index], waypoints };
  });

  return routes;
}
