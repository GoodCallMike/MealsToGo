import { Text } from "react-native";

export const RestaurantInfo = ({ resturant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos,
    address,
    openingHours,
    rating,
    ifClosedTemporarily,
  } = resturant;
  return <Text>info</Text>;
};
