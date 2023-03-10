import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // Returns a value on Android only; iOS returns null
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});