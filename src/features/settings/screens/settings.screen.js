import React, { useCallback, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Avatar, List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useFocusEffect } from "@react-navigation/native";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const UserContainer = styled.View`
  align-items: center;
`;

const UserAvatar = styled(Avatar.Icon)`
  background-color: #2182bd;
`;

const settingItem = (props, icon) => (listProps) =>
  <List.Icon {...listProps} color="black" icon={icon} />;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      if (!user) return;
      getProfilePicture(user);
    }, [user])
  );

  return (
    <>
      <UserContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && <UserAvatar size={180} icon="human" />}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
          <Spacer position="top" size="large" />
          <Text variant="label">{user.email}</Text>
        </TouchableOpacity>
      </UserContainer>
      <List.Section>
        <SettingItem
          title="Favorites"
          description="View your favorites"
          left={(props) => settingItem(props, "heart")}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingItem
          title="Logout"
          left={(props) => settingItem(props, "door")}
          onPress={onLogout}
        />
      </List.Section>
    </>
  );
};
