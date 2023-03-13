import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD3Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";
import { Search } from "../components/search.component";

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
  const { error, isLoading, restaurants } = useContext(RestaurantsContext);

  if (isLoading) {
    return (
      <ActivityIndicatorContainter>
        <ActivityIndicator size={50} color={MD3Colors.primary50} />
      </ActivityIndicatorContainter>
    );
  }

  return (
    <>
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail")}
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
