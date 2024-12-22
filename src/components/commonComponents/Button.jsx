import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ROBOTOBOLD, ROBOTOSERIF } from "../../constants/fontPath";
import { BLACK } from "../../constatnt/color";

export const CustomButton = ({
    text = "",
    height = 50,
    width = "60%",
    backgroundColor = "#EA4B19",
    fontSize = 20,
    // fontFamily = ROBOTOSERIF,
    fontWeight = "",
    color = BLACK,

    onPress = () => {
        console.log("onPress not set");
    }
}) => {
    return (
        <>
            <Pressable
                onPress={onPress}
                style={{
                    ...styles.btnView,
                    height: height,
                    width: width,
                    backgroundColor: backgroundColor,
                }}>
                <Text allowFontScaling={false} style={{ ...styles.sloganTxtView, fontWeight: fontWeight, color: color, fontSize: fontSize }}>{text}</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    btnView: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        elevation: 10
    }, sloganTxtView: {
        fontSize: 16,
        fontWeight: "bold",
        color: BLACK,
    }
})