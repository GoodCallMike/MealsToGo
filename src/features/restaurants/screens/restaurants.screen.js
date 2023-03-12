import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import { ActivityIndicator, MD3Colors, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/resturants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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

export const RestaurantsScreen = () => {
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
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard resturant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
