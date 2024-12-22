import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { BLACK, LIGHTGREY, STORYIMGBG, WHITE } from "../../constatnt/color";
import { PROFILE } from "../../constatnt/imagePath";
import { VectorIcon } from "../../utils/VectorIcon";

export const CreateStory = () => {
    return (
        <>
            <View style={styles.createStoryContainer}>

                <Image source={PROFILE} style={styles.profileImg} />

                <View style={styles.iconContainer}>
                    <VectorIcon
                        name="circle-with-plus"
                        type="Entypo"
                        size={35}
                        color={Colors.primaryColor}
                    />
                </View>
                <Text style={styles.createStory}>Create story</Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    createStoryContainer: {
        borderWidth: 1,
        borderColor: LIGHTGREY,
        borderRadius: 10,
        backgroundColor: STORYIMGBG,
        alignItems: 'center',
        position: 'relative',
        paddingBottom: 10,
    },
    profileImg: {
        height: 110,
        width: 110,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    iconContainer: {
        position: 'absolute',
        top: '55%',
        backgroundColor: WHITE,
        borderRadius: 50,
    },
    createStory: {
        fontSize: 14,
        color: BLACK,
        textAlign: 'center',
        marginTop: 25,
        width: '50%',
    },
})