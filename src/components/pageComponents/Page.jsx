import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { WHITE } from "../../constatnt/color";
import { PostData } from "../../assets/data/PostData";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";

export const Page = () => {
    return (
        <>
            <View style={styles.postContainer}>
                {PostData.map(item => (
                    <View key={item.id}>
                        <PostHeader data={item} />
                        <Image source={item.postImg} style={styles.postImg} />
                        <PostFooter data={item} />
                    </View>
                ))}
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: WHITE,
        marginTop: 8,
    },
    postImg: {
        width: '100%',
        height: 250,
    },
});