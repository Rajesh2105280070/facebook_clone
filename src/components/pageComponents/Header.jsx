import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { GREY, LIGHTGREY, WHITE } from "../../constatnt/color";
import { LOGO } from "../../constatnt/imagePath";
import { VectorIcon } from "../../utils/VectorIcon";

export const Header = () => {
    return (
        <>
            <View style={styles.container}>

                <Image source={LOGO} style={styles.fbLogoStyle} />

                <View style={styles.headerIcons}>

                    <View style={styles.searchBg}>

                        <VectorIcon
                            name="search"
                            type="FontAwesome5"
                            size={19}
                            color={GREY}
                        />
                    </View>

                    <View style={styles.searchBg}>

                        <VectorIcon
                            name="messenger"
                            type="Fontisto"
                            size={12}
                            color={GREY}
                        />
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    fbLogoStyle: {
        height: 25,
        width: 130,
    },
    searchBg: {
        backgroundColor: LIGHTGREY,
        height: 35,
        width: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    container: {
        backgroundColor: WHITE,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcons: {
        flexDirection: 'row',
    },
})