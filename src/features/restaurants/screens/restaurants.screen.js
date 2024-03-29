import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, MD3Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

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
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
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
              <FadeInView>
                <RestaurantInfoCard resturant={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
