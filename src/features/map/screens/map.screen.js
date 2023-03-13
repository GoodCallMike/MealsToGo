import React from "react";
import styled from "styled-components";
import MapView from "react-native-maps";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = () => (
  <>
    <Search />
    <Map />
  </>
);
