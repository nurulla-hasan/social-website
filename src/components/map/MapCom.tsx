"use client";

import React, { useEffect, useState } from "react";
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";

// Replace with your Mapbox access token
const MAPBOX_TOKEN = "your-mapbox-token";

// Fake API for demonstration purpose
const FAKE_API_URL = "https://jsonplaceholder.typicode.com/users";

// Initialize Map component
const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
});

// Default center and zoom
const DEFAULT_CENTER = [-122.4194, 37.7749]; // San Francisco coordinates
const DEFAULT_ZOOM = [12];

interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

const MapView: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(FAKE_API_URL);
        const data = await response.json();
        const mappedLocations = data.map((user: any) => ({
          latitude: 37.7749 + Math.random() * 2 - 1,
          longitude: -122.4194 + Math.random() * 2 - 1,
          name: user.name,
        }));
        setLocations(mappedLocations);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        // @ts-ignore
        <Map
          style="mapbox://styles/mapbox/streets-v11"
          containerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={DEFAULT_ZOOM}
          center={DEFAULT_CENTER}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinates={[location.longitude, location.latitude]}
              onClick={() => setSelectedLocation(location)}
            >
              <div
                style={{
                  backgroundColor: "red",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            </Marker>
          ))}

          {selectedLocation && (
            // @ts-ignore
            <Popup
              coordinates={[
                selectedLocation.longitude,
                selectedLocation.latitude,
              ]}
              onClose={() => setSelectedLocation(null)}
            >
              <div>{selectedLocation.name}</div>
            </Popup>
          )}
        </Map>
      )}
    </div>
  );
};

export default MapView;
