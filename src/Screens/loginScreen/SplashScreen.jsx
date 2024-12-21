import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { MyStatusBar } from "../../components/commonComponents/MyStatusBar";
import { BLACK, WHITE } from "../../constatnt/color";
import { CIRCLELOGO, LOGO } from "../../constatnt/imagePath";
import { HEIGHT, WIDTH } from "../../constatnt/config";

export default SplashScreen = () => {
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoScale = useRef(new Animated.Value(0.5)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Logo and text animation sequence
        Animated.sequence([
            Animated.parallel([
                Animated.timing(logoOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.spring(logoScale, {
                    toValue: 1,
                    friction: 3,
                    useNativeDriver: true,
                }),
            ]),
            // Text animation with delay
            Animated.timing(textOpacity, {
                toValue: 1,
                duration: 300,
                delay: 100,
                useNativeDriver: true,
            }),
        ]).start(() => {
            // Navigate to Onboarding screen after animation completes
            // navigation.navigate("Onboarding");
        });
    }, []);

    return (
        <>
            <MyStatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <View style={styles.container}>
                {/* Logo in the center */}
                <Animated.View style={[styles.imgContainer, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}>
                    {LOGO ? (
                        <Image source={CIRCLELOGO} style={styles.img} />
                    ) : (
                        <Text allowFontScaling={true} style={{ color: BLACK }}>Logo not available</Text>
                    )}
                </Animated.View>

                {/* Text at the bottom */}
                <Animated.View style={[styles.txtContainer, { opacity: textOpacity }]}>
                    <Text allowFontScaling={true} style={styles.txt}>Facebook</Text>
                </Animated.View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        flex: 1,
        justifyContent: "space-between", // Space between logo and text
        alignItems: "center",
    },
    imgContainer: {
        flex: 1,
        justifyContent: "center", // Center logo vertically
        alignItems: "center",
    },
    img: {
        height: 100, // Adjusted logo size
        width: 100,
    },
    txtContainer: {
        marginBottom: HEIGHT * 0.05, // Positioned text at the bottom with some margin
        alignItems: "center",
    },
    txt: {
        color: BLACK,
        fontSize: WIDTH * 0.05, // Responsive font size
        fontWeight: "bold",
    },
});
