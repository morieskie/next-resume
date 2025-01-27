"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Pin,
} from "@vis.gl/react-google-maps";
type Poi = { key: string; location: google.maps.LatLngLiteral };

const locations: Poi[] = [
  { key: "Home", location: { lat: -25.7566, lng: 28.1914 } },
  { key: "Work", location: { lat: -33.88306, lng: 18.52556 } },
];

const PoiMarkers = ({ pois }: { pois: Poi[] }) => {
  return (
    <>
      {pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

const MapComponent = () => {
  return (
    <>
      <APIProvider apiKey="AIzaSyB7KI0HDGqOcyRfBKrbkmn1UHf4zERYNXY">
        <Map
          defaultZoom={5}
          defaultCenter={{ lat: -29.5595, lng: 22.9375 }}
          mapId="DEMO_MAP_ID"
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        >
          <PoiMarkers pois={locations} />
        </Map>
      </APIProvider>
    </>
  );
};

export default MapComponent;
