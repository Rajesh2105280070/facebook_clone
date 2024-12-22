import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CAMERAROLL, PROFILE } from "../../constatnt/imagePath";
import { BORDERGREY, GREY, WHITE } from "../../constatnt/color";

export const SubHeader = () => {
    return (
        <>
            <View style={styles.container}>
                <Image source={PROFILE} style={styles.profileStyle} />
                <View style={styles.inputBox}>
                    <Text style={styles.inputStyle}>Write something here...</Text>
                    <Text style={styles.inputStyle}>यहाँ कुछ लिखिए...</Text>
                </View>
                <Image source={CAMERAROLL} style={styles.cameraRoll} />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        backgroundColor: WHITE,
        alignItems: 'center',
      },
      profileStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
      },
      inputBox: {
        borderWidth: 1,
        borderColor: BORDERGREY,
        borderRadius: 30,
        paddingHorizontal: 20,
        width: '70%',
        paddingVertical: 8,
      },
      inputStyle: {
        fontSize: 16,
        color: GREY,
      },
});