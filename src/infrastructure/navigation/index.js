import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <SafeArea>
          <AppNavigator />
        </SafeArea>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
