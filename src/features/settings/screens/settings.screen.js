import React, { useContext } from "react";
import styled from "styled-components/native";
import { Avatar, List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const UserContainer = styled.View`
  align-items: center;
`;

const User = styled(Avatar.Icon)`
  background-color: #2182bd;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <>
      <UserContainer>
        <User size={180} icon="human" />
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </UserContainer>
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
