import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { WHITE } from "../../constatnt/color";
import { CreateStory } from "./CreateStory";
import { FriendStory } from "./FriendStoy";

export const Stories = () => {
    return (
        <>
            <ScrollView
                horizontal
                style={styles.storiesContainer}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}>
                <CreateStory />
                <FriendStory />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    storiesContainer: {
        backgroundColor: WHITE,
        marginTop: 8,
        padding: 15,
    },
    contentContainerStyle: {
        paddingRight: 30,
    },
});