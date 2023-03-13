import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MapView from "react-native-maps";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";

const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = () => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const delta = northeastLat - southwestLat;
    setLatDelta(delta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
