import { Camera, CameraType } from 'expo-camera';
import React, { useState } from 'react';
import {Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ShowPhotoPreview from "../../components/ShowPhotoPreview";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImageManipulator from 'expo-image-manipulator';
import globalStyles from "../../assets/css/globalStyles";

export default function CameraScreen({ onCapture, closeCamera }: any) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }


    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={globalStyles.background_transparent}>
                <ImageBackground source={require("../../assets/images/background.png")} style={globalStyles.background}>
                    <View style={styles.grand_permission_container}>
                        <Text style={styles.text}>We need your permission to show the camera</Text>
                        <Button onPress={requestPermission} title="Grant Permission"/>
                        <TouchableOpacity onPress={closeCamera}>
                            <Text style={globalStyles.cancel_option}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takeNewPhoto = () => {
        setPreviewVisible(false)
        setCapturedImage(null)
    }

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();

            if (type === CameraType.front) {
                const flippedPhoto = await ImageManipulator.manipulateAsync(
                    photo.uri,
                    [{ flip: ImageManipulator.FlipType.Horizontal }]
                );

                setPreviewVisible(true);
                setCapturedImage(flippedPhoto);
            } else {
                setPreviewVisible(true);
                setCapturedImage(photo);
            }
        }
    };


    return (
        <View style={styles.container}>
            {previewVisible && capturedImage ?
                (<ShowPhotoPreview photo={capturedImage} takeNewPhoto={takeNewPhoto} saveImage={onCapture} closeCamera={closeCamera}/>) :
                (<Camera
                    style={styles.camera}
                    type={type}
                    ref={ref => setCamera(ref)}>
                    <View style={[globalStyles.camera_button_container, globalStyles.background_blue]}>
                        <TouchableOpacity style={[globalStyles.background_transparent, styles.button]} onPress={closeCamera}>
                            <Icon name="close" size={40} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.takePicture, styles.button]} onPress={takePicture}/>
                        <TouchableOpacity style={[globalStyles.background_transparent, styles.endButton]} onPress={toggleCameraType}>
                            <Icon name="retweet" size={40} color="white"/>
                        </TouchableOpacity>
                    </View>
                </Camera>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    camera: {
        flex: 1,
    },
    button: {
        height: 60,
        justifyContent: 'center'
    },
    endButton: {
        alignItems: 'flex-end'
    },
    takePicture: {
        width: 60,
        height: 60,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    grand_permission_container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        width: '70%'
    }
});
