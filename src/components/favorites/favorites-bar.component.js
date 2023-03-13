import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites }) => (
  <FavoritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favorites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <Spacer key={key} position="left" size="medium">
            <CompactRestaurantInfo restaurant={restaurant} />
          </Spacer>
        );
      })}
    </ScrollView>
  </FavoritesWrapper>
);
