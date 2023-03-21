import React, { useContext, useRef, useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { Camera as ExpoCamera, CameraType } from "expo-camera";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraContainer = styled.View`
  flex: 1;
`;

const Camera = styled(ExpoCamera)`
  flex: 1;
`;

const CameraButton = styled(TouchableOpacity)`
  flex: 1;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const { user } = useContext(AuthenticationContext);

  if (!permission) requestPermission();

  const onCameraReady = () => setIsCameraReady(true);

  const takePhoto = async () => {
    if (!isCameraReady || !permission) return;
    try {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    } catch (error) {
      console.error(error);
    }
    navigation.goBack();
  };

  return (
    <CameraContainer>
      <CameraButton onPress={takePhoto}>
        <Camera
          ref={cameraRef}
          type={CameraType.front}
          onCameraReady={onCameraReady}
        />
      </CameraButton>
    </CameraContainer>
  );
};
