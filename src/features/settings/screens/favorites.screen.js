import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavoritesArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <RestaurantList
      data={favorites}
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
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
