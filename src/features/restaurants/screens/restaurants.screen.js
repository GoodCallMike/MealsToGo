import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD3Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const ActivityIndicatorContainter = styled.View`
  flex: 1;
  justify-content: center;
  align-item: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  if (isLoading) {
    return (
      <ActivityIndicatorContainter>
        <ActivityIndicator size={50} color={MD3Colors.primary50} />
      </ActivityIndicatorContainter>
    );
  }

  return (
    <>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavoritesBar favorites={favorites} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard resturant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
