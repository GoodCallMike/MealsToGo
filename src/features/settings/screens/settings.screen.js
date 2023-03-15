import React, { useContext } from "react";
import styled from "styled-components/native";
import { Avatar, List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <>
      <List.Section>
        <SettingItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </>
  );
};
