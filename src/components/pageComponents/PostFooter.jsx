import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GREY, LIGHTGREY } from "../../constatnt/color";
import { VectorIcon } from "../../utils/VectorIcon";
import { HEART, LIKE, SHOCK } from "../../constatnt/imagePath";

export const PostFooter = () => {
    return (
        <>
            <View style={styles.postFotterContainer}>
                <View style={styles.footerReactionSec}>
                    <View style={styles.row}>
                        <Image source={LIKE} style={styles.reactionIcon} />
                        <Image source={SHOCK} style={styles.reactionIcon} />
                        <Image source={HEART} style={styles.reactionIcon} />
                        <Text style={styles.reactionCount}>{data.reactionCount}</Text>
                    </View>
                    <Text style={styles.reactionCount}>{data.comments} comments</Text>
                </View>
                <View style={styles.userActionSec}>
                    <View style={styles.row}>
                        <VectorIcon
                            name="like2"
                            type="AntDesign"
                            size={25}
                            color={Colors.grey}
                        />
                        <Text style={styles.reactionCount}>Like</Text>
                    </View>
                    <View style={styles.row}>
                        <VectorIcon
                            name="chatbox-outline"
                            type="Ionicons"
                            size={25}
                            color={Colors.grey}
                        />
                        <Text style={styles.reactionCount}>Comment</Text>
                    </View>

                    <View style={styles.row}>
                        <VectorIcon
                            name="arrow-redo-outline"
                            type="Ionicons"
                            size={25}
                            color={Colors.grey}
                        />
                        <Text style={styles.reactionCount}>Share</Text>
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    reactionIcon: {
        height: 20,
        width: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postFotterContainer: {
        padding: 16,
    },
    reactionCount: {
        color: GREY,
        fontSize: 14,
        paddingLeft: 5,
    },
    footerReactionSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: LIGHTGREY,
        paddingBottom: 15,
    },
    userActionSec: {
        marginTop: 15,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});